import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, Check, ChevronDown, Clock3, Construction, HardHat, House,
  Layers3, MapPin, Menu, MessageCircle, Phone, Quote, ShieldCheck, Sparkles, X,
  Wrench, Building2, Ruler, Send, ExternalLink, Star, Images, Hammer
} from 'lucide-react'
import { BUSINESS, DEMO_MODE } from './config/business'
import { reviewConfig } from './config/reviews'

const services = [
  { icon: House, title: 'Residential Construction', desc: 'Thoughtfully planned homes built around your requirements, site and budget.' },
  { icon: Building2, title: 'Commercial Buildings', desc: 'Functional building solutions designed for business and everyday use.' },
  { icon: Layers3, title: 'Foundation & Structural Work', desc: 'Careful groundwork, reinforcement and concrete construction.' },
  { icon: Ruler, title: 'Interiors & Finishing', desc: 'Interior improvements, finishing details and practical space upgrades.' },
  { icon: Wrench, title: 'Renovation & Remodelling', desc: 'Refresh existing spaces with considered renovation and improvement work.' },
  { icon: Construction, title: 'Civil Works & Consultation', desc: 'Project-specific civil work planning and construction coordination.' },
]
const work = [
  { file: 'work001.jpg', title: 'Interior Finishing', category: 'Interiors', note: 'Interior work photograph supplied by the company' },
  { file: 'work002.jpg', title: 'Concrete Placement', category: 'Civil Works', note: 'On-site concrete work photograph supplied by the company' },
  { file: 'work003.jpg', title: 'Slab Reinforcement', category: 'Civil Works', note: 'Reinforcement work photograph supplied by the company' },
  { file: 'work004.jpg', title: 'Foundation Reinforcement', category: 'Foundations', note: 'Foundation work photograph supplied by the company' },
  { file: 'work005.png', title: 'Exterior Design Inspiration', category: 'Exterior', note: 'Reference inspiration image; not represented as a completed company project' },
]
type ModalKind = 'contact' | 'enquiry' | null

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modal, setModal] = useState<ModalKind>(null)
  const [intent, setIntent] = useState('General Project Enquiry')
  const [filter, setFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', location: '', details: '', consent: false })
  const [formError, setFormError] = useState('')
  const categories = ['All', 'Interiors', 'Civil Works', 'Foundations', 'Exterior']
  const visibleWork = filter === 'All' ? work : work.filter(item => item.category === filter)
  const openEnquiry = (service = 'General Project Enquiry') => {
    setIntent(service); setForm(p => ({ ...p, service })); setSubmitted(false); setFormError(''); setModal('enquiry')
  }
  const contactAction = () => { if (DEMO_MODE) setModal('contact'); else window.location.href = `tel:${BUSINESS.phone}` }
  const nav = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.location.trim() || !form.consent) {
      setFormError('Please complete your name, mobile number, project location and consent.')
      return
    }
    if (!/^(?:\+91[ -]?)?[6-9]\d{9}$/.test(form.phone.replace(/[()]/g, '').replace(/\s/g, ''))) {
      setFormError('Enter a valid 10-digit Indian mobile number.')
      return
    }
    if (form.email && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(form.email)) {
      setFormError('Enter a valid email address or leave it blank.')
      return
    }
    setFormError('')
    setSubmitted(true)
  }
  return <div className="site-shell">
    <div className="topbar"><span><MapPin size={14}/> Nellore, Andhra Pradesh</span><span className="topbar-right"><ShieldCheck size={14}/> Quality-conscious construction. Clear communication.</span></div>
    <header className="header">
      <a href="#home" className="brand" onClick={e => {e.preventDefault(); nav('home')}} aria-label="HINDTECH CONSTRUCTIONS home">
        <img src="/images/hindtech-logo.png" alt="HINDTECH CONSTRUCTIONS logo" />
      </a>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        {['About','Services','Projects','Gallery','Reviews','Contact'].map(n => <a key={n} href={`#${n.toLowerCase()}`} onClick={e => {e.preventDefault(); nav(n.toLowerCase())}}>{n}</a>)}
        <button className="button button-green nav-cta" onClick={() => openEnquiry()}>Request a Quote <ArrowRight size={16}/></button>
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content wrap">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-line"/> NELLORE · CONSTRUCTION & BUILDING SOLUTIONS</div>
          <h1>Building strong<br/><em>foundations.</em><br/>Creating lasting value.</h1>
          <p>From considered home interiors to dependable structural and civil work, we bring care, precision and commitment to every project.</p>
          <div className="hero-actions">
            <button className="button button-green" onClick={() => openEnquiry()}>Discuss your project <ArrowRight size={17}/></button>
            <button className="button button-outline-light" onClick={() => nav('projects')}>Explore our work <ArrowDownRight size={17}/></button>
          </div>
          <div className="hero-proof"><span><Check size={15}/> Quality-focused work</span><span><Check size={15}/> Clear communication</span><span><Check size={15}/> Residential & civil</span></div>
        </div>
        <div className="hero-index"><span>01</span><i/> BUILT WITH INTENTION</div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="wrap intro-grid">
          <div className="section-kicker"><span>01 / ABOUT HINDTECH</span><div className="kicker-rule"/></div>
          <div className="intro-copy"><h2>Good construction is felt in <em>every detail.</em></h2><p className="lead">A building is more than its final appearance. It is the planning, the groundwork, the finishing and the trust built along the way.</p><p>HINDTECH CONSTRUCTIONS works across building and construction needs in Nellore. We focus on practical solutions, careful workmanship and clear conversations—so every project can move forward with purpose.</p><button className="text-link" onClick={() => openEnquiry()}>Tell us what you’re planning <ArrowRight size={17}/></button></div>
          <div className="intro-visual"><img src="/images/work001.jpg" alt="Interior finishing work supplied by HINDTECH CONSTRUCTIONS" loading="lazy"/><div className="image-note"><span className="note-dot"/> WORKMANSHIP IN FOCUS</div></div>
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="wrap">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> WHAT WE DO</div><h2>Built around your <em>project.</em></h2></div><p>From structural essentials to the details that make a space feel complete, explore the services that may fit your requirements.</p></div>
          <div className="services-grid">{services.map((s, i) => <article className="service-card" key={s.title}><div className="service-top"><span className="service-num">0{i+1}</span><s.icon size={25} strokeWidth={1.5}/></div><h3>{s.title}</h3><p>{s.desc}</p><button className="service-link" onClick={() => openEnquiry(s.title)}>Enquire about this <ArrowUpRightIcon/></button></article>)}</div>
          <p className="fineprint">Service availability is subject to project scope and confirmation by the company.</p>
        </div>
      </section>

      <section className="statement-section"><div className="statement-bg"/><div className="wrap statement-content"><div className="eyebrow eyebrow-light"><span className="eyebrow-line"/> OUR APPROACH</div><h2>Strong work starts<br/>long before the <em>finish line.</em></h2><div className="statement-bottom"><p>Thoughtful planning. Practical decisions. Attention to the details that matter. A dependable process starts with understanding what you need.</p><button className="button button-white" onClick={() => openEnquiry()}>Start a conversation <ArrowRight size={17}/></button></div></div></section>

      <section className="projects-section section-pad" id="projects">
        <div className="wrap">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> SELECTED WORK</div><h2>Progress you can <em>see.</em></h2></div><p>Real work photographs supplied for this website. Image descriptions identify the visible work without making unsupported claims about project names or locations.</p></div>
          <div className="project-feature"><button className="project-image-large" onClick={() => setSelectedImage('/images/work002.jpg')} aria-label="Enlarge concrete placement photograph"><img src="/images/work002.jpg" alt="Concrete placement work at a construction site" loading="lazy"/><span className="expand-icon"><Images size={18}/></span></button><div className="project-feature-copy"><span className="project-label">FIELD NOTES / 001</span><h3>From the ground up.</h3><p>Construction progress is built through the stages that matter: preparation, reinforcement, concrete work and careful coordination on site.</p><div className="project-tags"><span>Concrete work</span><span>Site execution</span></div><button className="text-link" onClick={() => nav('gallery')}>View work gallery <ArrowRight size={17}/></button></div></div>
          <div className="mini-projects">{work.slice(2,5).map((item, i) => <button className="mini-project" key={item.file} onClick={() => setSelectedImage(`/images/${item.file}`)}><div className="mini-img"><img src={`/images/${item.file}`} alt={item.note} loading="lazy"/><span><ArrowUpRightIcon/></span></div><div className="mini-meta"><span>{item.category}</span><span>0{i+2}</span></div><h3>{item.title}</h3><p>{item.note}</p></button>)}</div>
        </div>
      </section>

      <section className="gallery-section section-pad" id="gallery"><div className="wrap">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> PHOTO GALLERY</div><h2>Work, in <em>detail.</em></h2></div><p>Browse the photographs shared for HINDTECH CONSTRUCTIONS. Replace or add files easily in the public/images folder.</p></div>
        <div className="filter-row" role="group" aria-label="Filter gallery">{categories.map(c => <button key={c} onClick={() => setFilter(c)} className={filter === c ? 'filter active' : 'filter'}>{c}</button>)}</div>
        <div className="gallery-grid">{visibleWork.map((item, i) => <button className={`gallery-item gallery-item-${i+1}`} key={item.file} onClick={() => setSelectedImage(`/images/${item.file}`)}><img src={`/images/${item.file}`} alt={item.note} loading="lazy"/><span className="gallery-caption"><span><b>{item.title}</b><small>{item.category} · Supplied image</small></span><span className="gallery-arrow"><ArrowUpRightIcon/></span></span></button>)}</div>
      </div></section>

      <section className="values-section section-pad"><div className="wrap values-layout"><div className="values-heading"><div className="eyebrow"><span className="eyebrow-line"/> THE HINDTECH APPROACH</div><h2>Details matter.<br/><em>So does trust.</em></h2><p>Every project has its own needs. We believe in listening first, communicating clearly and keeping attention on the work in front of us.</p><button className="button button-green" onClick={() => openEnquiry()}>Plan your project <ArrowRight size={17}/></button></div><div className="values-list">{[{icon:HardHat,title:'Workmanship first',desc:'A focus on practical execution and attention to visible details.'},{icon:MessageCircle,title:'Clear conversations',desc:'Discuss requirements, expectations and next steps openly.'},{icon:ShieldCheck,title:'Built for purpose',desc:'Solutions should suit the site, intended use and project scope.'},{icon:Hammer,title:'Care at every stage',desc:'From groundwork to finishing, each stage deserves attention.'}].map((v,i)=><div className="value-row" key={v.title}><span className="value-number">0{i+1}</span><v.icon size={24} strokeWidth={1.5}/><div><h3>{v.title}</h3><p>{v.desc}</p></div><ArrowUpRightIcon/></div>)}</div></div></section>

      <section className="reviews-section section-pad" id="reviews"><div className="wrap">
        <div className="reviews-top"><div><div className="eyebrow"><span className="eyebrow-line"/> GOOGLE BUSINESS REVIEWS</div><h2>Word of mouth.<br/><em>Worth everything.</em></h2></div><div className="rating-summary"><div className="rating-number">{reviewConfig.rating.toFixed(1)}<span>/5</span></div><div className="stars" aria-label="Rating supplied by business: 4.9 out of 5">{[1,2,3,4,5].map(n=><Star key={n} size={17} fill="currentColor" strokeWidth={1}/>)}</div><p>Google rating · {reviewConfig.totalReviews} reviews<br/><small>Figures supplied by the business; verify before launch.</small></p><a className="button button-dark" href={BUSINESS.googleReviewsUrl} target="_blank" rel="noreferrer">Read Google Reviews <ExternalLink size={15}/></a></div></div>
        <div className="review-cards">{reviewConfig.reviews.map((r, i)=><article className="review-card" key={r.id}><div className="review-card-top"><span className="review-google">Google <span>G</span></span><Quote size={21}/></div><div className="stars">{[1,2,3,4,5].map(n=><Star key={n} size={15} fill={n<=r.rating?'currentColor':'none'} strokeWidth={1.5}/>)}</div><p className="review-text">{r.text}</p><div className="review-author"><span className="review-avatar">{i+1}</span><span><b>{r.name}</b><small>{r.date || 'Verified review details to be added'}</small></span></div></article>)}</div>
        <div className="reviews-bottom"><p>Read the full listing for customer feedback and the latest business information.</p><a className="text-link" href={BUSINESS.googleReviewsUrl} target="_blank" rel="noreferrer">Read all Google reviews <ArrowRight size={17}/></a><a className="text-link" href={BUSINESS.writeReviewUrl} target="_blank" rel="noreferrer">Write a Google review <ExternalLink size={15}/></a></div>
        <p className="review-warning">Before publishing: replace the three clearly marked review placeholders in <code>src/config/reviews.ts</code> with genuine customer review text and names. Do not publish placeholder testimonials as real reviews.</p>
      </div></section>

      <section className="contact-section section-pad" id="contact"><div className="wrap contact-grid"><div className="contact-copy"><div className="eyebrow eyebrow-light"><span className="eyebrow-line"/> LET'S BUILD SOMETHING</div><h2>Have a project<br/>in <em>mind?</em></h2><p>Tell us a little about what you are planning. Start a conversation with HINDTECH CONSTRUCTIONS.</p><button className="button button-green" onClick={() => openEnquiry()}>Send a project enquiry <ArrowRight size={17}/></button><div className="contact-details"><div><MapPin size={19}/><span><small>VISIT / LOCATION</small>{BUSINESS.address}</span></div><div><Phone size={19}/><span><small>PHONE</small>{BUSINESS.phoneDisplay}</span></div><div><Clock3 size={19}/><span><small>BUSINESS HOURS</small>Daily until 9 PM · Please confirm before visiting</span></div></div></div><div className="map-wrap"><iframe title="Map showing HINDTECH CONSTRUCTIONS in Nellore" src={BUSINESS.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="map-link" href={BUSINESS.mapDirections} target="_blank" rel="noreferrer">Get directions <ArrowUpRightIcon/></a></div></div></section>
    </main>

    <footer className="footer"><div className="wrap"><div className="footer-main"><div className="footer-brand"><img src="/images/hindtech-logo.png" alt="HINDTECH CONSTRUCTIONS"/><p>Building strong foundations. Creating lasting value.</p></div><div><h4>EXPLORE</h4><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#reviews">Reviews</a></div><div><h4>GET IN TOUCH</h4><span>{BUSINESS.phoneDisplay}</span><span>Nellore, Andhra Pradesh</span><button onClick={() => openEnquiry()}>Request a quote <ArrowRight size={15}/></button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} HINDTECH CONSTRUCTIONS. All rights reserved.</span><span className="agency-credit">Designed & Developed by <a href="https://mainnovextechnologies.lovable.app/" target="_blank" rel="noreferrer">MA Innovex Technologies</a> <img src="/images/ma-innovex-logo.png" alt="MA Innovex Technologies logo"/></span></div></div></footer>

    <div className="floating-actions"><button className="float-whatsapp" onClick={contactAction} aria-label="WhatsApp contact"><MessageCircle size={22}/></button><button className="float-call" onClick={contactAction} aria-label="Call HINDTECH CONSTRUCTIONS"><Phone size={21}/></button></div>

    {modal && <div className="modal-backdrop" role="presentation" onMouseDown={e => {if(e.target===e.currentTarget)setModal(null)}}><section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button className="modal-close" onClick={() => setModal(null)} aria-label="Close dialog"><X/></button>
      {modal === 'contact' ? <><span className="modal-icon"><MessageCircle/></span><div className="eyebrow">WE APPRECIATE YOUR INTEREST</div><h2 id="modal-title">Thanks for reaching out.</h2><p>This is a website demonstration prepared by MA Innovex Technologies. Direct calling and WhatsApp messaging will be activated after the website is approved and officially launched.</p><p>You can preview your project enquiry below to continue the process.</p><button className="button button-green full-width" onClick={() => openEnquiry()}>Submit project enquiry <ArrowRight size={16}/></button><button className="modal-secondary" onClick={() => setModal(null)}>Close</button></> :
      submitted ? <><span className="modal-icon success"><Check/></span><h2 id="modal-title">Enquiry preview ready</h2><p>This demo has validated your details locally. No enquiry has been sent or stored on a server.</p><div className="submission-preview"><b>{form.name}</b><span>{form.service || intent}</span><span>{form.location}</span><span>{form.phone}</span>{form.details && <p>{form.details}</p>}</div><button className="button button-green full-width" onClick={() => {setSubmitted(false);setModal(null)}}>Done <Check size={16}/></button></> :
      <><div className="eyebrow">PROJECT ENQUIRY / DEMO</div><h2 id="modal-title">Tell us what you’re planning.</h2><p className="modal-intro">Fields marked * are required. This demo will show a local preview only.</p><form className="enquiry-form" onSubmit={submitForm} noValidate>
        <label>Full name *<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" autoComplete="name"/></label>
        <label>Mobile number *<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="10-digit mobile number" inputMode="tel" autoComplete="tel"/></label>
        <label>Email address<input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com" type="email" autoComplete="email"/></label>
        <label>Service required<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option value="">Select a service</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label>
        <label>Project location *<input value={form.location} onChange={e=>setForm({...form,location:e.target.value})} placeholder="Area / town / city"/></label>
        <label className="span-two">Project requirements<textarea value={form.details} onChange={e=>setForm({...form,details:e.target.value})} placeholder="Briefly describe your project..." rows={3}/></label>
        <label className="consent span-two"><input type="checkbox" checked={form.consent} onChange={e=>setForm({...form,consent:e.target.checked})}/> I agree to be contacted about this project enquiry.</label>
        {formError && <p className="form-error span-two">{formError}</p>}
        <button className="button button-green full-width span-two" type="submit">Preview enquiry <Send size={16}/></button>
      </form><p className="demo-disclaimer">DEMO MODE · Nothing is transmitted to the company.</p></>}
    </section></div>}

    {selectedImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded gallery image" onClick={() => setSelectedImage(null)}><button onClick={() => setSelectedImage(null)} aria-label="Close image"><X/></button><img src={selectedImage} alt="Expanded construction work photograph" onClick={e=>e.stopPropagation()}/></div>}
    <button className="back-top" onClick={() => nav('home')} aria-label="Back to top"><ChevronDown size={18}/></button>
  </div>
}

function ArrowUpRightIcon() { return <ArrowRight size={16} className="arrow-up-right"/> }
