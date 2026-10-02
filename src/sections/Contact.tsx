import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Linkedin, Mail, MapPin, MessageCircle, Phone, Send, } from "lucide-react";
import { profile } from "../data/profile";
import { SectionTitle } from "../components/SectionTitle";
import { motion } from "motion/react";
import { cardVariants } from "../components/ScrollReveal";
type FormState = {
    kind: "idle" | "loading" | "success" | "error";
    message: string;
};
export function Contact() {
    const [state, setState] = useState<FormState>({ kind: "idle", message: "" });
    const contacts = [
        {
            label: "Email",
            value: profile.email,
            href: `mailto:${profile.email}`,
            Icon: Mail,
        },
        {
            label: "WhatsApp",
            value: profile.whatsapp,
            href: profile.whatsappHref,
            Icon: MessageCircle,
        },
        {
            label: "Phone",
            value: profile.phone,
            href: profile.phoneHref,
            Icon: Phone,
        },
        {
            label: "LinkedIn",
            value: profile.linkedin,
            href: profile.linkedinHref,
            Icon: Linkedin,
        },
    ];
    const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("name") || "").trim();
        const email = String(data.get("email") || "").trim();
        const message = String(data.get("message") || "").trim();
        if (name.length < 2 ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
            message.length < 20) {
            setState({
                kind: "error",
                message: "Please enter your name, a valid email, and a message of at least 20 characters.",
            });
            return;
        }
        const { VITE_CONTACT_SERVICE_ID, VITE_CONTACT_TEMPLATE_ID, VITE_CONTACT_PUBLIC_KEY, } = import.meta.env;
        if (!VITE_CONTACT_SERVICE_ID ||
            !VITE_CONTACT_TEMPLATE_ID ||
            !VITE_CONTACT_PUBLIC_KEY) {
            setState({
                kind: "error",
                message: "The contact form is not configured yet. Please use one of the contact links.",
            });
            return;
        }
        setState({ kind: "loading", message: "Sending…" });
        try {
            await emailjs.send(VITE_CONTACT_SERVICE_ID, VITE_CONTACT_TEMPLATE_ID, { from_name: name, from_email: email, message }, { publicKey: VITE_CONTACT_PUBLIC_KEY });
            setState({
                kind: "success",
                message: "Your message was sent. Thanks for reaching out!",
            });
            form.reset();
        }
        catch {
            setState({
                kind: "error",
                message: "Your message could not be sent. Please try again or contact me directly.",
            });
        }
    };
    return (<section id="contact" className="section wrap contact-section" style={{
        marginInline: "auto",
        paddingBottom: "120px"
    }}>
      <SectionTitle index="06" kicker="LET'S MAKE SOMETHING">
        Let&rsquo;s Work <span className="gradient-text" style={{
        color: "transparent",
        background: "linear-gradient(100deg, #c1b6ff 2%, #9a8cff 42%, #6bded6 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        backgroundImage: "linear-gradient(105deg, #426dd6 0%, #7958d3 46%, #348ec3 82%, #426dd6 100%)",
        backgroundSize: "220% auto",
        animation: "gradientFlow 9s ease-in-out infinite"
    }}>Together</span>
      </SectionTitle>
      <div className="contact-grid" style={{
        display: "grid"
    }}>
        <div className="contact-copy">
          <p style={{
        fontSize: "12px",
        lineHeight: 1.9,
        margin: "0 0 27px"
    }}>
            Have a project in mind or want to talk about full-stack development?
            Reach me through any of these channels.
          </p>
          <div className="contact-cards" style={{
        display: "grid",
        gap: "10px",
        marginTop: "20px"
    }}>
            {contacts.map(({ label, value, href, Icon }) => (<motion.a className="contact-card" variants={cardVariants} whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.99 }} transition={{ type: "spring", stiffness: 240, damping: 24 }} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} key={label} style={{
            color: "#26344d",
            textDecoration: "none",
            WebkitTapHighlightColor: "transparent",
            background: "rgba(255, 255, 255, 0.94)",
            display: "flex",
            minWidth: "0",
            alignItems: "center",
            gap: "11px",
            padding: "13px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderRadius: "7px",
            transition: "transform .22s ease, box-shadow .22s ease, border-color .22s ease"
        }}>
                <span style={{
            color: "#5e54c7",
            background: "linear-gradient(140deg, #eeedff, #e6f2ff)",
            borderColor: "rgba(88, 93, 186, 0.12)",
            display: "grid",
            flex: "0 0 36px",
            placeItems: "center",
            width: "36px",
            height: "36px",
            borderRadius: "9px"
        }}>
                  <Icon size={18}/>
                </span>
                <div style={{
            minWidth: "0"
        }}>
                  <small style={{
            color: "#76839a",
            display: "block",
            marginBottom: "4px",
            font: "9px 'DM Mono', monospace",
            letterSpacing: ".06em",
            textTransform: "uppercase"
        }}>{label}</small>
                  <b style={{
            color: "#293750",
            display: "block",
            overflowWrap: "anywhere",
            fontSize: "10px",
            fontWeight: 650
        }}>{value}</b>
                </div>
              </motion.a>))}
          </div>
          <div className="contact-location" style={{
        marginTop: "17px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexWrap: "wrap",
        color: "#65748a",
        fontSize: "9px"
    }}>
            <MapPin size={16}/>
            <span>{profile.location}</span>
          </div>
        </div>
        <motion.form className="contact-form" variants={cardVariants} onSubmit={sendMessage} noValidate style={{
        border: "1px solid var(--line)",
        borderRadius: "9px",
        background: "rgba(255, 255, 255, 0.94)",
        color: "#26344d",
        borderColor: "rgba(45, 66, 105, 0.13)",
        boxShadow: "0 10px 30px rgba(34, 54, 89, 0.055)"
    }}>
          <span className="kicker" style={{
        font: "10px \"DM Mono\",\n    monospace",
        letterSpacing: "0.18em",
        color: "#626f86",
        display: "block",
        marginBottom: "19px"
    }}>SEND A MESSAGE</span>
          <div className="form-row" style={{
        display: "grid"
    }}>
            <label style={{
        display: "block",
        color: "#44516a",
        fontSize: "9px"
    }}>
              Your name
              <input name="name" autoComplete="name" placeholder="Enter your name" required minLength={2} style={{
        font: "inherit",
        display: "block",
        width: "100%",
        marginTop: "8px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "4px",
        background: "#fbfcfe",
        padding: "12px",
        fontSize: "10px",
        resize: "vertical",
        transition: "border-color 0.2s"
    }}/>
            </label>
            <label style={{
        display: "block",
        color: "#44516a",
        fontSize: "9px"
    }}>
              Email address
              <input name="email" autoComplete="email" type="email" placeholder="Enter your email" required style={{
        font: "inherit",
        display: "block",
        width: "100%",
        marginTop: "8px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "4px",
        background: "#fbfcfe",
        padding: "12px",
        fontSize: "10px",
        resize: "vertical",
        transition: "border-color 0.2s"
    }}/>
            </label>
          </div>
          <label style={{
        display: "block",
        color: "#44516a",
        fontSize: "9px"
    }}>
            Your message
            <textarea name="message" placeholder="Tell me a little about what you have in mind…" rows={5} required minLength={20} style={{
        font: "inherit",
        display: "block",
        width: "100%",
        marginTop: "8px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderRadius: "4px",
        background: "#fbfcfe",
        padding: "12px",
        fontSize: "10px",
        resize: "vertical",
        transition: "border-color 0.2s"
    }}/>
          </label>
          <div className="form-bottom" style={{
        display: "flex",
        gap: "13px",
        flexWrap: "wrap"
    }}>
            <motion.button className="button button-primary" type="submit" disabled={state.kind === "loading"} whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} style={{
        font: "inherit",
        WebkitTapHighlightColor: "transparent",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        borderRadius: "4px",
        padding: "13px 16px",
        fontSize: "11px",
        fontWeight: 700,
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "transparent",
        transition: "transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease, border-color 0.22s ease",
        background: "linear-gradient(110deg, #4e70da, #7558d2)"
    }}>
              {state.kind === "loading" ? "Sending…" : "Send message"}
              <Send size={15}/>
            </motion.button>
            <span aria-live="polite" className={`form-status form-${state.kind}`} style={{
        fontSize: "9px",
        lineHeight: 1.6,
        color: state.kind === "success" ? "#208160" : state.kind === "error" ? "#b53d50" : state.kind === "loading" ? "#594bbc" : "#647188"
    }}>
              {state.message}
            </span>
          </div>
        </motion.form>
      </div>
    </section>);
}
