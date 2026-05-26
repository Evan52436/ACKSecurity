"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    service: "Network Pentesting",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        organization: "",
        email: "",
        service: "Network Pentesting",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className={`${styles.contact} section-padding`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div className={styles.titleGroup}>
            <h2 className={styles.title}>Contact</h2>
          </div>
          <div className={styles.accentLine}></div>
          <p className={styles.subtitle}>
            Contact Acknowledge Members
          </p>
        </div>

        <div className={`${styles.formContainer}`}>
          {status === "success" ? (
            <div className={styles.successCard}>
              <div className={styles.successIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--accent-blue)" strokeWidth="2"/>
                  <path d="M8 12.5L10.5 15L16 9" stroke="var(--accent-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.successTitle}>REQUEST SUBMITTED</h3>
              <p className={styles.successText}>
                Thank you! Your quote request has been encrypted and received. 
                Our core team will review your specs and email you within 12 hours.
              </p>
              <button 
                onClick={() => setStatus("idle")} 
                className={styles.resetBtn}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                {/* Name */}
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Alice Smith"
                    required
                  />
                </div>

                {/* Organization */}
                <div className={styles.formGroup}>
                  <label htmlFor="organization" className={styles.label}>
                    Organization <span className={styles.optional}>(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="e.g. Acme Corp / School Department"
                  />
                </div>
              </div>

              <div className={styles.row}>
                {/* Email */}
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email Address <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="email@example.com"
                    required
                  />
                </div>

                {/* Service Requested */}
                <div className={styles.formGroup}>
                  <label htmlFor="service" className={styles.label}>
                    Service Requested <span className={styles.required}>*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="Network Pentesting">Network Pentesting</option>
                    <option value="Web App Security">Web App Security</option>
                    <option value="Linux System Audits">Linux System Audits</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className={styles.formGroupFull}>
                <label htmlFor="message" className={styles.label}>
                  Message <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Describe your architecture scope, timeline, and security goals..."
                  rows={5}
                  required
                />
              </div>

              {/* Error indicator */}
              {status === "error" && (
                <div className={styles.errorBanner}>
                  {errorMessage}
                </div>
              )}

              {/* Submit button container */}
              <div className={styles.submitContainer}>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={styles.submitBtn}
                >
                  {status === "submitting" ? "TRANSFERS SECURE..." : "GET A SECURITY QUOTE"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
