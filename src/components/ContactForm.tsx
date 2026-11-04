"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cars } from "@/data/cars";
import {
  fadeUp,
  reduceMotionVariants,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

interface FormState {
  name: string;
  phone: string;
  startDate: string;
  endDate: string;
  vehicle: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  startDate?: string;
  endDate?: string;
  vehicle?: string;
}

const initial: FormState = {
  name: "",
  phone: "",
  startDate: "",
  endDate: "",
  vehicle: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Indiquez votre nom (2 caractères minimum).";
  }
  const phone = values.phone.replace(/\s/g, "");
  if (!/^\+?[0-9]{8,15}$/.test(phone)) {
    errors.phone = "Numéro de téléphone invalide.";
  }
  if (!values.startDate) errors.startDate = "Date de début requise.";
  if (!values.endDate) errors.endDate = "Date de fin requise.";
  if (
    values.startDate &&
    values.endDate &&
    new Date(values.endDate) < new Date(values.startDate)
  ) {
    errors.endDate = "La date de fin doit être après le début.";
  }
  if (!values.vehicle) errors.vehicle = "Sélectionnez un véhicule.";
  return errors;
}

export default function ContactForm() {
  const reduced = useReducedMotion();
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSuccess(true);
      setValues(initial);
    }
  };

  return (
    <section
      id="contact"
      className="section-pad py-20 md:py-28"
      aria-labelledby="contact-title"
    >
      <motion.div
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]"
        variants={reduceMotionVariants(reduced, staggerContainer)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div variants={reduceMotionVariants(reduced, fadeUp)}>
          <p className="text-sm uppercase tracking-[0.28em] text-accent">
            Réservation
          </p>
          <h2
            id="contact-title"
            className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Réservez votre véhicule
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Remplissez le formulaire : notre équipe vous confirme la
            disponibilité sous 2 heures ouvrées.
          </p>
        </motion.div>

        <motion.div
          variants={reduceMotionVariants(reduced, fadeUp)}
          className="relative rounded-sm border border-border bg-surface-elevated p-6 md:p-8"
        >
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex min-h-[320px] flex-col items-center justify-center text-center"
                role="status"
                aria-live="polite"
              >
                <CheckCircle2 className="mb-4 text-accent" size={48} aria-hidden />
                <h3 className="font-display text-3xl font-semibold">
                  Demande envoyée
                </h3>
                <p className="mt-3 max-w-sm text-muted">
                  Merci ! Nous vous recontactons rapidement pour finaliser votre
                  location.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-8 rounded-md border border-border px-4 py-2 text-sm text-foreground transition hover:border-accent/50"
                >
                  Nouvelle demande
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={onSubmit}
                noValidate
                className="grid gap-5 sm:grid-cols-2"
              >
                <Field
                  id="name"
                  label="Nom complet"
                  error={errors.name}
                  className="sm:col-span-2"
                >
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, name: e.target.value }))
                    }
                    className="field-input"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                </Field>

                <Field id="phone" label="Téléphone" error={errors.phone} className="sm:col-span-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+33 6 12 34 56 78"
                    value={values.phone}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, phone: e.target.value }))
                    }
                    className="field-input"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                </Field>

                <Field id="startDate" label="Date de début" error={errors.startDate}>
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={values.startDate}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, startDate: e.target.value }))
                    }
                    className="field-input"
                    aria-invalid={Boolean(errors.startDate)}
                    aria-describedby={
                      errors.startDate ? "startDate-error" : undefined
                    }
                  />
                </Field>

                <Field id="endDate" label="Date de fin" error={errors.endDate}>
                  <input
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={values.endDate}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, endDate: e.target.value }))
                    }
                    className="field-input"
                    aria-invalid={Boolean(errors.endDate)}
                    aria-describedby={
                      errors.endDate ? "endDate-error" : undefined
                    }
                  />
                </Field>

                <Field
                  id="vehicle"
                  label="Véhicule souhaité"
                  error={errors.vehicle}
                  className="sm:col-span-2"
                >
                  <select
                    id="vehicle"
                    name="vehicle"
                    value={values.vehicle}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, vehicle: e.target.value }))
                    }
                    className="field-input"
                    aria-invalid={Boolean(errors.vehicle)}
                    aria-describedby={
                      errors.vehicle ? "vehicle-error" : undefined
                    }
                  >
                    <option value="">Choisir un modèle</option>
                    {cars.map((car) => (
                      <option key={car.id} value={car.name}>
                        {car.name} — {car.category}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:bg-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                  >
                    Envoyer ma demande
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
  className = "",
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm text-muted">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
