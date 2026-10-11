import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { contactInfo } from "../social";
import type { Translation } from "../i18n";

interface InquiryFormProps {
  t: Translation;
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: FormValues = { name: "", email: "", phone: "", company: "", message: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Formspree endpoint, e.g. "https://formspree.io/f/xxxxxxxx".
 * Set `VITE_FORMSPREE_ENDPOINT` in `.env` (locally) and in the Vercel project
 * settings. Without it the form can't deliver and shows the direct
 * email/phone instead — it never silently pretends to succeed.
 */
const ENDPOINT = (import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "").trim();

export default function InquiryForm({ t }: InquiryFormProps) {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const setField = (key: keyof FormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = t.inquiry.required;
    if (!values.email.trim()) next.email = t.inquiry.required;
    else if (!EMAIL_RE.test(values.email.trim())) next.email = t.inquiry.invalidEmail;
    if (!values.message.trim()) next.message = t.inquiry.required;
    return next;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot — bots fill hidden fields, humans don't.
    const gotcha = new FormData(e.currentTarget).get("_gotcha");
    if (typeof gotcha === "string" && gotcha.trim()) {
      setStatus("success");
      return;
    }

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)
        ?.focus();
      return;
    }

    if (!ENDPOINT) {
      // Not wired up yet — point the visitor at the direct channels.
      if (import.meta.env.DEV) {
        console.warn(
          "[InquiryForm] VITE_FORMSPREE_ENDPOINT is not set — submissions cannot be delivered. " +
            "Add your Formspree form URL to .env (see .env.example)."
        );
      }
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          company: values.company.trim(),
          message: values.message.trim(),
          _subject: `New inquiry from ${values.name.trim() || "website visitor"}`,
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full bg-frost/60 border border-silver focus:border-copper focus:bg-white outline-none transition-colors duration-300 px-4 py-3.5 text-midnight placeholder:text-midnight/35 font-light";
  const label = "eyebrow text-midnight/60 text-[0.62rem] block mb-3";
  const errText = "mt-2 text-[0.78rem] text-copper";

  return (
    <section id="inquiry" className="relative bg-frost overflow-hidden scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-copper" />
              <span className="eyebrow text-copper">{t.inquiry.eyebrow}</span>
            </div>
            <h2 className="font-display text-midnight text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.05] font-light">
              {t.inquiry.headline}
            </h2>
            <p className="mt-8 text-midnight/70 text-lg leading-relaxed font-light">
              {t.inquiry.body}
            </p>

            <div className="mt-10 pt-8 border-t border-silver space-y-3 text-sm">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-midnight/70 hover:text-copper transition-colors duration-300"
                dir="ltr"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M4 5h16v14H4z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-midnight/70 hover:text-copper transition-colors duration-300"
                dir="ltr"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {contactInfo.phoneDisplay}
              </a>
            </div>
          </motion.div>

          {/* Form / status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-silver p-6 sm:p-8 lg:p-10">
              {status === "success" ? (
                <div className="py-10 text-center" role="status">
                  <div className="mx-auto w-14 h-14 rounded-full border border-copper/40 flex items-center justify-center mb-6">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-copper" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display text-midnight text-2xl lg:text-3xl font-light">
                    {t.inquiry.successTitle}
                  </h3>
                  <p className="mt-4 text-midnight/65 font-light">{t.inquiry.successBody}</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-xs tracking-[0.18em] uppercase font-medium text-copper hover:text-midnight transition-colors duration-300"
                  >
                    {t.inquiry.sendAnother}
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={onSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="inquiry-name" className={label}>
                        {t.inquiry.name} *
                      </label>
                      <input
                        id="inquiry-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={setField("name")}
                        placeholder={t.inquiry.namePlaceholder}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "inquiry-name-error" : undefined}
                        className={field}
                      />
                      {errors.name && (
                        <p id="inquiry-name-error" className={errText}>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="inquiry-email" className={label}>
                        {t.inquiry.email} *
                      </label>
                      <input
                        id="inquiry-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        dir="ltr"
                        value={values.email}
                        onChange={setField("email")}
                        placeholder={t.inquiry.emailPlaceholder}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "inquiry-email-error" : undefined}
                        className={field}
                      />
                      {errors.email && (
                        <p id="inquiry-email-error" className={errText}>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="inquiry-phone" className={label}>
                        {t.inquiry.phone}{" "}
                        <span className="normal-case tracking-normal text-midnight/35">
                          ({t.inquiry.optional})
                        </span>
                      </label>
                      <input
                        id="inquiry-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        dir="ltr"
                        value={values.phone}
                        onChange={setField("phone")}
                        placeholder={t.inquiry.phonePlaceholder}
                        className={field}
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-company" className={label}>
                        {t.inquiry.company}{" "}
                        <span className="normal-case tracking-normal text-midnight/35">
                          ({t.inquiry.optional})
                        </span>
                      </label>
                      <input
                        id="inquiry-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        value={values.company}
                        onChange={setField("company")}
                        placeholder={t.inquiry.companyPlaceholder}
                        className={field}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="inquiry-message" className={label}>
                      {t.inquiry.message} *
                    </label>
                    <textarea
                      id="inquiry-message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={setField("message")}
                      placeholder={t.inquiry.messagePlaceholder}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "inquiry-message-error" : undefined}
                      className={`${field} resize-y`}
                    />
                    {errors.message && (
                      <p id="inquiry-message-error" className={errText}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Honeypot (hidden from humans) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="inquiry-gotcha">Leave this field empty</label>
                    <input id="inquiry-gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-6">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? t.inquiry.submitting : t.inquiry.submit}
                      {status !== "submitting" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                    <p className="text-midnight/45 text-xs font-light leading-relaxed">
                      {t.inquiry.privacy}
                    </p>
                  </div>

                  {/* Status */}
                  <div aria-live="polite" className="mt-6">
                    {status === "error" && (
                      <div className="border border-copper/40 bg-copper/[0.06] p-5">
                        <p className="font-display text-midnight text-lg">{t.inquiry.errorTitle}</p>
                        <p className="mt-2 text-midnight/70 text-sm font-light">
                          {t.inquiry.errorBody}{" "}
                          <a
                            href={`mailto:${contactInfo.email}`}
                            className="text-copper underline underline-offset-4 hover:text-midnight transition-colors"
                            dir="ltr"
                          >
                            {contactInfo.email}
                          </a>{" "}
                          <span className="text-midnight/50">·</span>{" "}
                          <a
                            href={`tel:${contactInfo.phone}`}
                            className="text-copper underline underline-offset-4 hover:text-midnight transition-colors"
                            dir="ltr"
                          >
                            {contactInfo.phoneDisplay}
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
