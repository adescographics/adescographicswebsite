'use client';

import { useState, useRef, useEffect } from 'react';
import { PageLayout } from '@/components/layouts/page-layout';
import { Container } from '@/components/layouts/container';
import { PageHeader } from '@/components/sections/page-header';
import { BackButton } from '@/components/ui/back-button';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Send,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
} from 'lucide-react';

const countryCodes = [
  { code: '+1', name: 'United States', flag: 'https://flagcdn.com/us.svg' },
  { code: '+1', name: 'Canada', flag: 'https://flagcdn.com/ca.svg' },
  { code: '+7', name: 'Russia', flag: 'https://flagcdn.com/ru.svg' },
  { code: '+20', name: 'Egypt', flag: 'https://flagcdn.com/eg.svg' },
  { code: '+27', name: 'South Africa', flag: 'https://flagcdn.com/za.svg' },
  { code: '+30', name: 'Greece', flag: 'https://flagcdn.com/gr.svg' },
  { code: '+31', name: 'Netherlands', flag: 'https://flagcdn.com/nl.svg' },
  { code: '+32', name: 'Belgium', flag: 'https://flagcdn.com/be.svg' },
  { code: '+33', name: 'France', flag: 'https://flagcdn.com/fr.svg' },
  { code: '+34', name: 'Spain', flag: 'https://flagcdn.com/es.svg' },
  { code: '+36', name: 'Hungary', flag: 'https://flagcdn.com/hu.svg' },
  { code: '+39', name: 'Italy', flag: 'https://flagcdn.com/it.svg' },
  { code: '+40', name: 'Romania', flag: 'https://flagcdn.com/ro.svg' },
  { code: '+41', name: 'Switzerland', flag: 'https://flagcdn.com/ch.svg' },
  { code: '+43', name: 'Austria', flag: 'https://flagcdn.com/at.svg' },
  { code: '+44', name: 'United Kingdom', flag: 'https://flagcdn.com/gb.svg' },
  { code: '+45', name: 'Denmark', flag: 'https://flagcdn.com/dk.svg' },
  { code: '+46', name: 'Sweden', flag: 'https://flagcdn.com/se.svg' },
  { code: '+47', name: 'Norway', flag: 'https://flagcdn.com/no.svg' },
  { code: '+48', name: 'Poland', flag: 'https://flagcdn.com/pl.svg' },
  { code: '+49', name: 'Germany', flag: 'https://flagcdn.com/de.svg' },
  { code: '+51', name: 'Peru', flag: 'https://flagcdn.com/pe.svg' },
  { code: '+52', name: 'Mexico', flag: 'https://flagcdn.com/mx.svg' },
  { code: '+53', name: 'Cuba', flag: 'https://flagcdn.com/cu.svg' },
  { code: '+54', name: 'Argentina', flag: 'https://flagcdn.com/ar.svg' },
  { code: '+55', name: 'Brazil', flag: 'https://flagcdn.com/br.svg' },
  { code: '+56', name: 'Chile', flag: 'https://flagcdn.com/cl.svg' },
  { code: '+57', name: 'Colombia', flag: 'https://flagcdn.com/co.svg' },
  { code: '+58', name: 'Venezuela', flag: 'https://flagcdn.com/ve.svg' },
  { code: '+60', name: 'Malaysia', flag: 'https://flagcdn.com/my.svg' },
  { code: '+61', name: 'Australia', flag: 'https://flagcdn.com/au.svg' },
  { code: '+62', name: 'Indonesia', flag: 'https://flagcdn.com/id.svg' },
  { code: '+63', name: 'Philippines', flag: 'https://flagcdn.com/ph.svg' },
  { code: '+64', name: 'New Zealand', flag: 'https://flagcdn.com/nz.svg' },
  { code: '+65', name: 'Singapore', flag: 'https://flagcdn.com/sg.svg' },
  { code: '+66', name: 'Thailand', flag: 'https://flagcdn.com/th.svg' },
  { code: '+81', name: 'Japan', flag: 'https://flagcdn.com/jp.svg' },
  { code: '+82', name: 'South Korea', flag: 'https://flagcdn.com/kr.svg' },
  { code: '+84', name: 'Vietnam', flag: 'https://flagcdn.com/vn.svg' },
  { code: '+86', name: 'China', flag: 'https://flagcdn.com/cn.svg' },
  { code: '+90', name: 'Turkey', flag: 'https://flagcdn.com/tr.svg' },
  { code: '+91', name: 'India', flag: 'https://flagcdn.com/in.svg' },
  { code: '+92', name: 'Pakistan', flag: 'https://flagcdn.com/pk.svg' },
  { code: '+93', name: 'Afghanistan', flag: 'https://flagcdn.com/af.svg' },
  { code: '+94', name: 'Sri Lanka', flag: 'https://flagcdn.com/lk.svg' },
  { code: '+95', name: 'Myanmar', flag: 'https://flagcdn.com/mm.svg' },
  { code: '+98', name: 'Iran', flag: 'https://flagcdn.com/ir.svg' },
  { code: '+212', name: 'Morocco', flag: 'https://flagcdn.com/ma.svg' },
  { code: '+213', name: 'Algeria', flag: 'https://flagcdn.com/dz.svg' },
  { code: '+216', name: 'Tunisia', flag: 'https://flagcdn.com/tn.svg' },
  { code: '+218', name: 'Libya', flag: 'https://flagcdn.com/ly.svg' },
  { code: '+220', name: 'Gambia', flag: 'https://flagcdn.com/gm.svg' },
  { code: '+221', name: 'Senegal', flag: 'https://flagcdn.com/sn.svg' },
  { code: '+222', name: 'Mauritania', flag: 'https://flagcdn.com/mr.svg' },
  { code: '+223', name: 'Mali', flag: 'https://flagcdn.com/ml.svg' },
  { code: '+224', name: 'Guinea', flag: 'https://flagcdn.com/gn.svg' },
  { code: '+225', name: 'Ivory Coast', flag: 'https://flagcdn.com/ci.svg' },
  { code: '+226', name: 'Burkina Faso', flag: 'https://flagcdn.com/bf.svg' },
  { code: '+227', name: 'Niger', flag: 'https://flagcdn.com/ne.svg' },
  { code: '+228', name: 'Togo', flag: 'https://flagcdn.com/tg.svg' },
  { code: '+229', name: 'Benin', flag: 'https://flagcdn.com/bj.svg' },
  { code: '+230', name: 'Mauritius', flag: 'https://flagcdn.com/mu.svg' },
  { code: '+231', name: 'Liberia', flag: 'https://flagcdn.com/lr.svg' },
  { code: '+232', name: 'Sierra Leone', flag: 'https://flagcdn.com/sl.svg' },
  { code: '+233', name: 'Ghana', flag: 'https://flagcdn.com/gh.svg' },
  { code: '+234', name: 'Nigeria', flag: 'https://flagcdn.com/ng.svg' },
  { code: '+235', name: 'Chad', flag: 'https://flagcdn.com/td.svg' },
  { code: '+236', name: 'Central African Republic', flag: 'https://flagcdn.com/cf.svg' },
  { code: '+237', name: 'Cameroon', flag: 'https://flagcdn.com/cm.svg' },
  { code: '+238', name: 'Cape Verde', flag: 'https://flagcdn.com/cv.svg' },
  { code: '+239', name: 'São Tomé and Príncipe', flag: 'https://flagcdn.com/st.svg' },
  { code: '+240', name: 'Equatorial Guinea', flag: 'https://flagcdn.com/gq.svg' },
  { code: '+241', name: 'Gabon', flag: 'https://flagcdn.com/ga.svg' },
  { code: '+242', name: 'Republic of the Congo', flag: 'https://flagcdn.com/cg.svg' },
  { code: '+243', name: 'Democratic Republic of the Congo', flag: 'https://flagcdn.com/cd.svg' },
  { code: '+244', name: 'Angola', flag: 'https://flagcdn.com/ao.svg' },
  { code: '+245', name: 'Guinea-Bissau', flag: 'https://flagcdn.com/gw.svg' },
  { code: '+246', name: 'British Indian Ocean Territory', flag: 'https://flagcdn.com/io.svg' },
  { code: '+248', name: 'Seychelles', flag: 'https://flagcdn.com/sc.svg' },
  { code: '+249', name: 'Sudan', flag: 'https://flagcdn.com/sd.svg' },
  { code: '+250', name: 'Rwanda', flag: 'https://flagcdn.com/rw.svg' },
  { code: '+251', name: 'Ethiopia', flag: 'https://flagcdn.com/et.svg' },
  { code: '+252', name: 'Somalia', flag: 'https://flagcdn.com/so.svg' },
  { code: '+253', name: 'Djibouti', flag: 'https://flagcdn.com/dj.svg' },
  { code: '+254', name: 'Kenya', flag: 'https://flagcdn.com/ke.svg' },
  { code: '+255', name: 'Tanzania', flag: 'https://flagcdn.com/tz.svg' },
  { code: '+256', name: 'Uganda', flag: 'https://flagcdn.com/ug.svg' },
  { code: '+257', name: 'Burundi', flag: 'https://flagcdn.com/bi.svg' },
  { code: '+258', name: 'Mozambique', flag: 'https://flagcdn.com/mz.svg' },
  { code: '+260', name: 'Zambia', flag: 'https://flagcdn.com/zm.svg' },
  { code: '+261', name: 'Madagascar', flag: 'https://flagcdn.com/mg.svg' },
  { code: '+262', name: 'Réunion', flag: 'https://flagcdn.com/re.svg' },
  { code: '+263', name: 'Zimbabwe', flag: 'https://flagcdn.com/zw.svg' },
  { code: '+264', name: 'Namibia', flag: 'https://flagcdn.com/na.svg' },
  { code: '+265', name: 'Malawi', flag: 'https://flagcdn.com/mw.svg' },
  { code: '+266', name: 'Lesotho', flag: 'https://flagcdn.com/ls.svg' },
  { code: '+267', name: 'Botswana', flag: 'https://flagcdn.com/bw.svg' },
  { code: '+268', name: 'Eswatini', flag: 'https://flagcdn.com/sz.svg' },
  { code: '+269', name: 'Comoros', flag: 'https://flagcdn.com/km.svg' },
  { code: '+290', name: 'Saint Helena', flag: 'https://flagcdn.com/sh.svg' },
  { code: '+291', name: 'Eritrea', flag: 'https://flagcdn.com/er.svg' },
  { code: '+297', name: 'Aruba', flag: 'https://flagcdn.com/aw.svg' },
  { code: '+298', name: 'Faroe Islands', flag: 'https://flagcdn.com/fo.svg' },
  { code: '+299', name: 'Greenland', flag: 'https://flagcdn.com/gl.svg' },
  { code: '+350', name: 'Gibraltar', flag: 'https://flagcdn.com/gi.svg' },
  { code: '+351', name: 'Portugal', flag: 'https://flagcdn.com/pt.svg' },
  { code: '+352', name: 'Luxembourg', flag: 'https://flagcdn.com/lu.svg' },
  { code: '+353', name: 'Ireland', flag: 'https://flagcdn.com/ie.svg' },
  { code: '+354', name: 'Iceland', flag: 'https://flagcdn.com/is.svg' },
  { code: '+355', name: 'Albania', flag: 'https://flagcdn.com/al.svg' },
  { code: '+356', name: 'Malta', flag: 'https://flagcdn.com/mt.svg' },
  { code: '+357', name: 'Cyprus', flag: 'https://flagcdn.com/cy.svg' },
  { code: '+358', name: 'Finland', flag: 'https://flagcdn.com/fi.svg' },
  { code: '+359', name: 'Bulgaria', flag: 'https://flagcdn.com/bg.svg' },
  { code: '+370', name: 'Lithuania', flag: 'https://flagcdn.com/lt.svg' },
  { code: '+371', name: 'Latvia', flag: 'https://flagcdn.com/lv.svg' },
  { code: '+372', name: 'Estonia', flag: 'https://flagcdn.com/ee.svg' },
  { code: '+373', name: 'Moldova', flag: 'https://flagcdn.com/md.svg' },
  { code: '+374', name: 'Armenia', flag: 'https://flagcdn.com/am.svg' },
  { code: '+375', name: 'Belarus', flag: 'https://flagcdn.com/by.svg' },
  { code: '+376', name: 'Andorra', flag: 'https://flagcdn.com/ad.svg' },
  { code: '+377', name: 'Monaco', flag: 'https://flagcdn.com/mc.svg' },
  { code: '+378', name: 'San Marino', flag: 'https://flagcdn.com/sm.svg' },
  { code: '+380', name: 'Ukraine', flag: 'https://flagcdn.com/ua.svg' },
  { code: '+381', name: 'Serbia', flag: 'https://flagcdn.com/rs.svg' },
  { code: '+382', name: 'Montenegro', flag: 'https://flagcdn.com/me.svg' },
  { code: '+383', name: 'Kosovo', flag: 'https://flagcdn.com/xk.svg' },
  { code: '+385', name: 'Croatia', flag: 'https://flagcdn.com/hr.svg' },
  { code: '+386', name: 'Slovenia', flag: 'https://flagcdn.com/si.svg' },
  { code: '+387', name: 'Bosnia and Herzegovina', flag: 'https://flagcdn.com/ba.svg' },
  { code: '+389', name: 'North Macedonia', flag: 'https://flagcdn.com/mk.svg' },
  { code: '+420', name: 'Czech Republic', flag: 'https://flagcdn.com/cz.svg' },
  { code: '+421', name: 'Slovakia', flag: 'https://flagcdn.com/sk.svg' },
  { code: '+423', name: 'Liechtenstein', flag: 'https://flagcdn.com/li.svg' },
  { code: '+500', name: 'Falkland Islands', flag: 'https://flagcdn.com/fk.svg' },
  { code: '+501', name: 'Belize', flag: 'https://flagcdn.com/bz.svg' },
  { code: '+502', name: 'Guatemala', flag: 'https://flagcdn.com/gt.svg' },
  { code: '+503', name: 'El Salvador', flag: 'https://flagcdn.com/sv.svg' },
  { code: '+504', name: 'Honduras', flag: 'https://flagcdn.com/hn.svg' },
  { code: '+505', name: 'Nicaragua', flag: 'https://flagcdn.com/ni.svg' },
  { code: '+506', name: 'Costa Rica', flag: 'https://flagcdn.com/cr.svg' },
  { code: '+507', name: 'Panama', flag: 'https://flagcdn.com/pa.svg' },
  { code: '+508', name: 'Saint Pierre and Miquelon', flag: 'https://flagcdn.com/pm.svg' },
  { code: '+509', name: 'Haiti', flag: 'https://flagcdn.com/ht.svg' },
  { code: '+590', name: 'Guadeloupe', flag: 'https://flagcdn.com/gp.svg' },
  { code: '+591', name: 'Bolivia', flag: 'https://flagcdn.com/bo.svg' },
  { code: '+592', name: 'Guyana', flag: 'https://flagcdn.com/gy.svg' },
  { code: '+593', name: 'Ecuador', flag: 'https://flagcdn.com/ec.svg' },
  { code: '+594', name: 'French Guiana', flag: 'https://flagcdn.com/gf.svg' },
  { code: '+595', name: 'Paraguay', flag: 'https://flagcdn.com/py.svg' },
  { code: '+596', name: 'Martinique', flag: 'https://flagcdn.com/mq.svg' },
  { code: '+597', name: 'Suriname', flag: 'https://flagcdn.com/sr.svg' },
  { code: '+598', name: 'Uruguay', flag: 'https://flagcdn.com/uy.svg' },
  { code: '+599', name: 'Curaçao', flag: 'https://flagcdn.com/cw.svg' },
  { code: '+670', name: 'East Timor', flag: 'https://flagcdn.com/tl.svg' },
  { code: '+672', name: 'Antarctica', flag: 'https://flagcdn.com/aq.svg' },
  { code: '+673', name: 'Brunei', flag: 'https://flagcdn.com/bn.svg' },
  { code: '+674', name: 'Nauru', flag: 'https://flagcdn.com/nr.svg' },
  { code: '+675', name: 'Papua New Guinea', flag: 'https://flagcdn.com/pg.svg' },
  { code: '+676', name: 'Tonga', flag: 'https://flagcdn.com/to.svg' },
  { code: '+677', name: 'Solomon Islands', flag: 'https://flagcdn.com/sb.svg' },
  { code: '+678', name: 'Vanuatu', flag: 'https://flagcdn.com/vu.svg' },
  { code: '+679', name: 'Fiji', flag: 'https://flagcdn.com/fj.svg' },
  { code: '+680', name: 'Palau', flag: 'https://flagcdn.com/pw.svg' },
  { code: '+681', name: 'Wallis and Futuna', flag: 'https://flagcdn.com/wf.svg' },
  { code: '+682', name: 'Cook Islands', flag: 'https://flagcdn.com/ck.svg' },
  { code: '+683', name: 'Niue', flag: 'https://flagcdn.com/nu.svg' },
  { code: '+684', name: 'American Samoa', flag: 'https://flagcdn.com/as.svg' },
  { code: '+685', name: 'Samoa', flag: 'https://flagcdn.com/ws.svg' },
  { code: '+686', name: 'Kiribati', flag: 'https://flagcdn.com/ki.svg' },
  { code: '+687', name: 'New Caledonia', flag: 'https://flagcdn.com/nc.svg' },
  { code: '+688', name: 'Tuvalu', flag: 'https://flagcdn.com/tv.svg' },
  { code: '+689', name: 'French Polynesia', flag: 'https://flagcdn.com/pf.svg' },
  { code: '+690', name: 'Tokelau', flag: 'https://flagcdn.com/tk.svg' },
  { code: '+691', name: 'Micronesia', flag: 'https://flagcdn.com/fm.svg' },
  { code: '+692', name: 'Marshall Islands', flag: 'https://flagcdn.com/mh.svg' },
  { code: '+850', name: 'North Korea', flag: 'https://flagcdn.com/kp.svg' },
  { code: '+852', name: 'Hong Kong', flag: 'https://flagcdn.com/hk.svg' },
  { code: '+853', name: 'Macau', flag: 'https://flagcdn.com/mo.svg' },
  { code: '+855', name: 'Cambodia', flag: 'https://flagcdn.com/kh.svg' },
  { code: '+856', name: 'Laos', flag: 'https://flagcdn.com/la.svg' },
  { code: '+880', name: 'Bangladesh', flag: 'https://flagcdn.com/bd.svg' },
  { code: '+886', name: 'Taiwan', flag: 'https://flagcdn.com/tw.svg' },
  { code: '+960', name: 'Maldives', flag: 'https://flagcdn.com/mv.svg' },
  { code: '+961', name: 'Lebanon', flag: 'https://flagcdn.com/lb.svg' },
  { code: '+962', name: 'Jordan', flag: 'https://flagcdn.com/jo.svg' },
  { code: '+963', name: 'Syria', flag: 'https://flagcdn.com/sy.svg' },
  { code: '+964', name: 'Iraq', flag: 'https://flagcdn.com/iq.svg' },
  { code: '+965', name: 'Kuwait', flag: 'https://flagcdn.com/kw.svg' },
  { code: '+966', name: 'Saudi Arabia', flag: 'https://flagcdn.com/sa.svg' },
  { code: '+967', name: 'Yemen', flag: 'https://flagcdn.com/ye.svg' },
  { code: '+968', name: 'Oman', flag: 'https://flagcdn.com/om.svg' },
  { code: '+970', name: 'Palestine', flag: 'https://flagcdn.com/ps.svg' },
  { code: '+971', name: 'United Arab Emirates', flag: 'https://flagcdn.com/ae.svg' },
  { code: '+972', name: 'Israel', flag: 'https://flagcdn.com/il.svg' },
  { code: '+973', name: 'Bahrain', flag: 'https://flagcdn.com/bh.svg' },
  { code: '+974', name: 'Qatar', flag: 'https://flagcdn.com/qa.svg' },
  { code: '+975', name: 'Bhutan', flag: 'https://flagcdn.com/bt.svg' },
  { code: '+976', name: 'Mongolia', flag: 'https://flagcdn.com/mn.svg' },
  { code: '+977', name: 'Nepal', flag: 'https://flagcdn.com/np.svg' },
  { code: '+992', name: 'Tajikistan', flag: 'https://flagcdn.com/tj.svg' },
  { code: '+993', name: 'Turkmenistan', flag: 'https://flagcdn.com/tm.svg' },
  { code: '+994', name: 'Azerbaijan', flag: 'https://flagcdn.com/az.svg' },
  { code: '+995', name: 'Georgia', flag: 'https://flagcdn.com/ge.svg' },
  { code: '+996', name: 'Kyrgyzstan', flag: 'https://flagcdn.com/kg.svg' },
  { code: '+998', name: 'Uzbekistan', flag: 'https://flagcdn.com/uz.svg' },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    code: '+234',
    service: '',
    message: '',
    agree: false,
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);
  const [openCode, setOpenCode] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenCode(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredCountryCodes = countryCodes.filter((country) => {
    const query = countrySearch.trim().toLowerCase();
    return (
      country.name.toLowerCase().includes(query) ||
      country.code.includes(query)
    );
  });

  const validate = () => {
    const err: any = {};

    if (!form.name.trim()) err.name = 'Name is required';
    if (!form.email.match(/^\S+@\S+\.\S+$/))
      err.email = 'Enter valid email';
    if (!form.phone.trim() || form.phone.length < 7)
      err.phone = 'Enter valid phone number';
    if (!form.service) err.service = 'Select a service';
    if (form.message.trim().length < 10)
      err.message = 'Message too short';
    if (!form.agree) err.agree = 'You must agree before submitting';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s Get In Touch.
            <br />
            <span className="text-muted-foreground">
              Tell us about your project.
            </span>
          </>
        }
        subtitle="Fill the form below and we’ll get back to you within 24 hours."
      />

      <section className="pb-10 lg:pb-16">
        <Container>
          <BackButton className="mb-3" />

          <div className="grid lg:grid-cols-3 gap-6 mb-16 lg:mb-20">

            {/* FORM */}
            <div className="lg:col-span-2 p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
              <h2 className="text-3xl font-display mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <div>
                  <label className="text-sm mb-3 block">Full Name</label>
                  <Input
                    placeholder="e.g. Aaron Adejola"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="text-foreground"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm mb-3 block">Email Address</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="text-foreground"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-sm mb-3 block">Phone Number</label>

                  <div className="flex gap-2 relative items-stretch">

                    {/* CUSTOM DROPDOWN */}
                    <div className="relative min-w-[130px]" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => {
                          setOpenCode((current) => !current);
                          setCountrySearch('');
                        }}
                        aria-haspopup="listbox"
                        aria-expanded={openCode}
                        className="px-3 h-12 border border-foreground/10 rounded-lg bg-background text-sm flex items-center gap-2 hover:border-foreground/20 transition-all min-w-[110px] text-left"
                      >
                        <img
                          src={countryCodes.find((c) => c.code === form.code)?.flag}
                          alt="Country flag"
                          className="w-5 h-4 object-cover rounded-sm"
                        />
                        <span className="truncate">{form.code}</span>
                        <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${openCode ? 'rotate-180' : ''}`} />
                      </button>

                      {openCode && (
                        <div className="absolute mt-2 w-[20rem] min-w-full bg-background border border-foreground/10 rounded-lg shadow-lg z-50 max-h-72 overflow-hidden">
                          <div className="p-3">
                            <Input
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              placeholder="Search country or code"
                              className="w-full text-foreground"
                            />
                          </div>
                          <div className="max-h-56 overflow-y-auto border-t border-foreground/10">
                            {filteredCountryCodes.length === 0 ? (
                              <div className="px-3 py-4 text-sm text-muted-foreground">
                                No matches found.
                              </div>
                            ) : (
                              filteredCountryCodes.map((c) => (
                                <button
                                  key={c.code + c.name}
                                  type="button"
                                  onClick={() => {
                                    setForm({ ...form, code: c.code });
                                    setOpenCode(false);
                                  }}
                                  className="w-full text-left px-3 py-3 text-sm flex items-center gap-2 hover:bg-foreground/5 transition-all"
                                >
                                  <img
                                    src={c.flag}
                                    alt="Flag"
                                    className="w-5 h-4 object-cover rounded-sm"
                                  />
                                  <span className="text-foreground truncate">{c.name}</span>
                                  <span className="text-muted-foreground ml-auto">{c.code}</span>
                                </button>
                              ))
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* INPUT */}
                    <Input
                      type="tel"
                      placeholder="801 234 5678"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="text-foreground flex-1 min-w-0"
                    />
                  </div>

                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* SERVICE */}
                <div>
                  <label className="text-sm mb-3 block">
                    Service Needed
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) =>
                      setForm({ ...form, service: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-foreground/10 rounded-lg text-sm bg-background text-foreground focus:border-foreground/20 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option>Web Design</option>
                    <option>Web Development</option>
                    <option>Graphic Design</option>
                    <option>IT Consultation</option>
                    <option>PC Repair</option>
                    <option>Data Recovery</option>
                    <option>Video & Content Creation</option>
                    <option>Livestream Setup</option>
                  </select>
                  {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm mb-3 block">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Briefly describe your project, goals, timeline, and expectations..."
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-foreground/10 rounded-lg text-sm bg-background text-foreground resize-none focus:outline-none focus:border-foreground/20 transition-all"
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* CHECKBOX */}
                <div className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) =>
                      setForm({ ...form, agree: e.target.checked })
                    }
                    className="w-4 h-4"
                  />
                  I agree to the privacy policy
                </div>
                {errors.agree && <p className="text-xs text-red-500">{errors.agree}</p>}

                {/* BUTTON */}
                <Button className="w-full h-12 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* INFO PANEL */}
            <div className="space-y-6">

              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <Mail className="w-5 h-5 text-[#eca8d6] mb-2" />
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  support@adesographics.com
                </p>
              </div>

              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <Phone className="w-5 h-5 text-[#eca8d6] mb-2" />
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">
                  +234 801 234 5678
                </p>
              </div>

              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <MapPin className="w-5 h-5 text-[#eca8d6] mb-2" />
                <p className="font-medium">Location</p>
                <p className="text-sm text-muted-foreground">
                  Ilorin, Kwara State, Nigeria
                </p>
              </div>

              {/* SOCIAL */}
              <div className="p-6 border border-foreground/10 bg-foreground/[0.02] rounded-lg">
                <p className="font-medium mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-foreground/10 rounded-full hover:bg-foreground/5 transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-foreground/10 rounded-full hover:bg-foreground/5 transition-all">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center border border-foreground/10 rounded-full hover:bg-foreground/5 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* SUCCESS MODAL */}
      {submitted && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-background border border-foreground/10 p-6 rounded-xl text-center">
            <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-3" />
            <p className="text-sm mb-4">
              Message sent successfully. We’ll reply within 24 hours.
            </p>
            <Button onClick={() => setSubmitted(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </PageLayout>
  );
}