            {showPartnerLogo && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="mb-8">
                <div className="inline-flex items-center justify-center h-24 md:h-28 px-10 md:px-14 rounded-xl bg-[#1a1f2e] border border-[#2a3347]">
                  <img src={partner.partnerLogoUrl} alt={partner.partnerName} className="h-14 md:h-18 w-auto max-w-[320px] md:max-w-[420px] object-contain" style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
                </div>
              </motion.div>
            )}