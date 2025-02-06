'use client'

export function WhatsappButtom() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css"
      />
      <a
        id="robbu-whatsapp-button"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5588988889005&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento"
      >
        <img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg" />
      </a>
    </>
  )
}
