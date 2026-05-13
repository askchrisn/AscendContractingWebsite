<script setup lang="ts">
import { reactive, ref } from 'vue'
import PageHero from '@/components/PageHero.vue'

const email = 'hello@ascendcontracting.example'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
})

const submitted = ref(false)
const error = ref('')

function encode(s: string) {
  return encodeURIComponent(s)
}

function onSubmit() {
  error.value = ''
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    error.value = 'Please fill in your name, email, and a short message so we can respond.'
    return
  }

  const subject = `Quote request from ${form.name.trim()}`
  const body = [
    `Name: ${form.name.trim()}`,
    `Email: ${form.email.trim()}`,
    `Phone: ${form.phone.trim() || '(not provided)'}`,
    `Service interest: ${form.service || 'Not specified'}`,
    '',
    form.message.trim(),
  ].join('\n')

  submitted.value = true
  window.location.href = `mailto:${email}?subject=${encode(subject)}&body=${encode(body)}`
}
</script>

<template>
  <div>
    <PageHero
      eyebrow="Contact"
      title="Request a quote or ask a question."
      subtitle="Share a few details and we will get back to you. Prefer the phone? Call us during business hours—we are glad to talk through timing and next steps."
    />

    <section class="section">
      <div class="wrap">
        <div class="grid">
          <aside class="aside">
            <h2 class="h2">Direct lines</h2>
            <p class="muted">
              Replace the placeholder phone and email in the footer and form with your real
              business details before going live.
            </p>
            <ul class="contact-list">
              <li>
                <span class="label">Phone</span>
                <a href="tel:+15551234567">(555) 123-4567</a>
              </li>
              <li>
                <span class="label">Email</span>
                <a :href="`mailto:${email}`">{{ email }}</a>
              </li>
              <li>
                <span class="label">Hours</span>
                Monday–Saturday, 7am–6pm
              </li>
            </ul>
          </aside>

          <div class="form-card">
            <h2 class="h2">Send a message</h2>
            <p v-if="submitted" class="note">
              Your email app should open with your message ready to send. If nothing opened,
              copy your note and email us directly at
              <a :href="`mailto:${email}`">{{ email }}</a
              >.
            </p>
            <form class="form" @submit.prevent="onSubmit">
              <label class="field">
                <span>Name *</span>
                <input v-model="form.name" type="text" name="name" autocomplete="name" required />
              </label>
              <label class="field">
                <span>Email *</span>
                <input
                  v-model="form.email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  required
                />
              </label>
              <label class="field">
                <span>Phone</span>
                <input
                  v-model="form.phone"
                  type="tel"
                  name="phone"
                  autocomplete="tel"
                />
              </label>
              <label class="field">
                <span>Service interest</span>
                <select v-model="form.service" name="service">
                  <option value="">Select one (optional)</option>
                  <option value="Roofing">Roofing</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Bathroom">Bathroom</option>
                  <option value="Multiple / other">Multiple / other</option>
                </select>
              </label>
              <label class="field">
                <span>Project details *</span>
                <textarea
                  v-model="form.message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us about your home, timing, and what you hope to accomplish."
                />
              </label>
              <p v-if="error" class="error">{{ error }}</p>
              <button type="submit" class="submit">Open email with quote request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section {
  padding: clamp(2.25rem, 5vw, 3rem) max(1rem, env(safe-area-inset-right)) clamp(3rem, 7vw, 4.5rem)
    max(1rem, env(safe-area-inset-left));
}

.wrap {
  max-width: 1120px;
  margin: 0 auto;
  min-width: 0;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 2rem;
  align-items: start;
}

@media (max-width: 860px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.h2 {
  margin: 0 0 0.75rem;
  font-size: 1.35rem;
}

.muted {
  margin: 0 0 1.5rem;
  color: var(--color-muted);
  line-height: 1.65;
  font-size: 0.95rem;
}

.contact-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.label {
  display: block;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
  color: var(--color-muted);
  margin-bottom: 0.25rem;
}

.contact-list a {
  font-weight: 500;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  overflow-wrap: anywhere;
}

.form-card {
  background: var(--color-surface);
  border-radius: var(--radius);
  padding: clamp(1.25rem, 4vw, 2rem);
  border: 1px solid rgba(30, 58, 95, 0.08);
  box-shadow: var(--shadow-md);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.field input,
.field select,
.field textarea {
  font: inherit;
  padding: 0.75rem 0.85rem;
  min-height: 48px;
  border-radius: 8px;
  border: 1px solid rgba(30, 58, 95, 0.2);
  background: #fff;
  color: var(--color-ink);
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: 2px solid var(--color-deep);
  outline-offset: 1px;
  border-color: var(--color-deep);
}

.field textarea {
  resize: vertical;
  min-height: 140px;
}

.error {
  margin: 0;
  font-size: 0.9rem;
  color: #9a3412;
}

.submit {
  margin-top: 0.25rem;
  align-self: flex-start;
  font: inherit;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.85rem 1.25rem;
  min-height: 52px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: var(--color-deep);
  color: #fff;
  -webkit-tap-highlight-color: transparent;
}

.submit:hover {
  background: var(--color-deep-hover);
}

@media (max-width: 599px) {
  .field input,
  .field select,
  .field textarea {
    font-size: 1rem;
  }

  .submit {
    align-self: stretch;
    width: 100%;
  }
}

.note {
  margin: 0 0 1rem;
  padding: 0.85rem 1rem;
  background: rgba(201, 162, 39, 0.15);
  border-radius: 8px;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--color-ink);
}
</style>
