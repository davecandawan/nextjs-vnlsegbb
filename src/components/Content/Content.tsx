import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import CallToActionButton from '../UI/CallToActionButton';

const VidalyticsVideo = dynamic(() => import('../VidalyticsVideo/VidalyticsVideo'), {
  ssr: false,
});

interface ContentProps {
  buttonText?: string;
}

const Content: React.FC<ContentProps> = ({
  buttonText = 'Give Me My Enhanced Laser Strike System + Virtual Steel Target!',
}) => {
  return (
    <div className="min-h-screen bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
      <div className="sticky top-0 left-0 right-0 w-full bg-custom-green text-black text-center py-2 px-4 text-[1.3rem] sm:text-[1.5rem] font-semibold z-50 shadow-md">
        Introducing the New “Enhanced” Laser Strike Training System
      </div>
      <div className="w-full max-w-[1140px] mx-auto px-5 py-4 lg:px-20 bg-white">
        <div className="space-y-8">
          <header className="text-center py-1">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-medium leading-snug md:leading-tight mb-4 px-2">
              <div className="font-bold italic">
                The Most FUN, Affordable, and Easy Way to{' '}
                <span className="underline">Boost Draw Speed & Accuracy In Minutes!</span>
              </div>
              <div className="italic text-center text-base sm:text-xl md:text-4xl mt-2 whitespace-nowrap">
                (With $0 Spent On Ammo Or Range Time)
              </div>
            </h1>
          </header>

          <div className="w-full max-w-4xl mx-auto -mt-4">
            <VidalyticsVideo />
          </div>
          <div className="w-full text-center my-8">
            <div className="text-xl md:text-3xl font-bold text-black px-4 py-1 inline-block">
              <span className="bg-[#ff0] px-1 py-1 italic leading-normal">
                Plus a "Virtual Steel" Target You Can Ring All Day to Your Heart's Content!
              </span>
            </div>
          </div>

          <div className="text-center my-8">
            <CallToActionButton />
          </div>

          <header className="text-center py-1">
            <span className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.2] text-[rgb(255,156,0)]">
              The Simplest Way to <span className="text-red-600">Get DEAD Accurate FAST…</span>
            </span>
          </header>
          <div className="w-full text-center my-2">
            <div className="text-[22px] md:text-3xl font-bold text-black px-4 py-1 inline-block">
              <span className="bg-[#ff0] px-1 py-1 italic">
                (From the Comfort of Your Living Room!)
              </span>
            </div>
          </div>
          <div className="space-y-4 text-xl font-medium leading-tight md:text-2xl">
            <p>Question for you…</p>
            <p>
              Wouldn't you love to know that{' '}
              <span className="font-bold italic">every time you draw and shoot your gun</span>
              , <u>you'll hit exactly what you're aiming for?</u>
            </p>
            <p>Over and over again… with lightning-fast speed?</p>
            <p>
              The answer should obviously be a huge <span className="font-bold">YES!</span>
            </p>
            <p>
              That's every shooter's dream:{' '}
              <span className="font-bold">to be as deadly accurate and fast as the pros.</span>
            </p>
          </div>
          <div className="w-full md:w-[80%] mx-auto max-w-[1120px] px-4 md:px-0">
            <Image
              src="/contentimages/quicklockbonus_new.webp"
              alt="VNSH Holster deal"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <header className="text-center py-1 md:py-6">
            <span className="text-3xl md:text-5xl font-semibold leading-tight md:leading-[1.2]">
              <span className="bg-[#f78f18] px-2 py-1">
                Discover Why Over 175,234 Americans Are Carrying With VNSH…
              </span>
            </span>
          </header>

          <div className="w-full max-w-7xl mx-auto space-y-6">
            <div className="space-y-4 text-xl font-medium leading-tight md:text-2xl">
              <p>
                Literally <span className="font-bold italic">hundreds of thousands</span> of Americans are using VNSH to carry comfortably all day, every day.
              </p>
              <p>The biggest reason why is…</p>
              <p>
                It's GUARANTEED to be{' '}
                <span className="font-bold italic">the most comfortable</span> holster you've ever worn –{' '}
                <span className="bg-[#ff0] px-2 py-1 font-bold">or you get 100% of your money back!</span>
              </p>
            </div>
            <div className="mx-auto w-full md:max-w-[70%] my-6">
              <Image
                src="/contentimages/guaranteed_banner.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <div className="space-y-4 text-xl font-medium leading-tight md:text-2xl">
              <p className="font-bold italic">What makes it so comfortable??</p>
              <p>The secret is our…</p>
            </div>
            <header className="text-center py-1 my-6">
              <span className="text-2xl md:text-4xl font-bold leading-tight md:leading-normal text-amber-500">
                Ultra-Plush <span className="text-red-600">"Yoga Pant" Material</span> Belt + a
                Robust Cordura Holster Body{' '}
                <span className="text-red-600 block md:inline-block mt-2 md:mt-0">That'll Never Dig or Poke</span>
              </span>
            </header>
            <div className="space-y-4 text-xl font-medium leading-tight md:text-2xl">
              <p>
                Unlike traditional holsters that require a <span className="font-bold">bulky tactical belt</span> and 
                constantly <span className="font-bold">jab at your body</span>…
              </p>
              <p className="mb-4">
                VNSH uses a durable but stretchy built-in belt that:
              </p>
            </div>
            <div className="pl-8 md:pl-12 mb-8">
              <ul className="space-y-5 text-xl font-medium leading-tight md:text-2xl">
                {[
                  "Effortlessly wicks sweat…",
                  "Never retains odor…",
                  "Feels softer than your favorite PJs on Christmas morning…"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                      <Image
                        src="/contentimages/greenCheck.png"
                        alt="Checkmark"
                        width={32}
                        height={32}
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="mt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 text-xl font-medium leading-tight md:text-2xl">
              <p>
                … combined with a super tough Cordura blend holster body that gives you{' '}
                <span className="font-bold">top-notch retention</span> – with a non-rigid feel that'll make you forget you're
                carrying at all
              </p>
              <p>
                Plus, VNSH makes just about ANY semi auto{' '}
                <span className="font-bold underline">disappear in plain sight</span>.
              </p>
              <p className="italic">How many other holsters can do all that??</p>
              <p className="font-bold">The answer is ZERO.</p>
            </div>
            <div className="text-center my-8">
              <CallToActionButton />
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-xl font-semibold leading-normal text-red-600">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <span className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.2] text-[rgb(255,156,0)]">
                Seriously, This Holster Works With 99.9% of Semi-Automatic Pistols On the Planet
              </span>
            </header>
            <div className="mx-auto w-full md:max-w-[70%]">
              <Image
                src="/contentimages/BlackHolster1.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Our holster design means that <b>regardless of what pistol you own…</b> it will help
              you safely and comfortably carry it.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              No more needing to buy multiple holsters for all your pistols.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Plus, since it has 2-built in mag pouches, now{' '}
              <b>you don’t need to spend extra money on mag pouches</b> to guarantee you’re never
              out of the fight.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Take a look at the list of brands our holster works with and then grab yours before
              the price goes up!
            </p>
            <div className="w-full my-8 px-4">
              {/* Desktop Image */}
              <div className="hidden md:block w-full">
                <div className="mx-auto w-[90%] max-w-[1400px]">
                  <Image
                    src="/contentimages/LogoDesktop1.webp"
                    alt="Logo"
                    width={1400}
                    height={1000}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              </div>
              {/* Mobile Image */}
              <div className="block md:hidden">
                <Image
                  src="/contentimages/LogoMobile2.webp"
                  alt="Logo mobile"
                  width={500}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
            <div className="text-center my-8">
              <CallToActionButton />
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.0] text-[rgb(255,0,0)]">
                <div>
                  <em>Limited FREE Bonus Gift (Worth $50)</em>
                </div>
                <div className="my-0 md:my-2">
                  <span className="text-[rgb(255,156,0)]">Next 127 Buyers Get a </span>
                  <em>Complimentary VNSH</em>
                </div>
                <div>
                  <em>QuickLock Safe!</em>
                </div>
              </div>
            </header>
            <div className="w-full md:w-[80%] mx-auto max-w-[1120px] px-4 md:px-0">
              <Image
                src="/contentimages/quicklockbonus_new.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              For a short time, we’re giving out our bestselling lockbox –{' '}
              <b>
                <em>the VNSH QuickLock</em>
              </b>{' '}
              –{' '}
              <span className="bg-[#ff0] px-2 py-1">
                100% FREE with every holster order (from this page ONLY)!
              </span>
            </p>
            <div className="pl-4 md:pl-6">
              <ul className="space-y-6 mb-6 text-xl md:text-2xl font-medium leading-tight">
                <li className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1 flex items-start">
                    <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                      <Image
                        src="/contentimages/greenCheck.png"
                        alt="Checkmark"
                        width={32}
                        height={32}
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="mt-1">
                      <b>Ultra Secure, But Lightning Fast Access -</b> a simple but robust key lock
                      gives you total peace-of-mind that{' '}
                      <b>
                        <em>nobody</em>
                      </b>{' '}
                      is getting inside but you. Yet you're always seconds away from having your
                      weapon in-hand.
                    </span>
                  </div>
                  <div className="w-full md:w-64 flex-shrink-0 rounded-lg overflow-hidden flex items-center">
                    <div className="relative w-full h-auto">
                      <Image
                        src="/contentimages/VNSH_Gun_Safe1.webp"
                        alt="Secure Access"
                        width={256}
                        height={256}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </li>

                <li className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1 flex items-start">
                    <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                      <Image
                        src="/contentimages/greenCheck.png"
                        alt="Checkmark"
                        width={32}
                        height={32}
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="mt-1">
                      <b>Great for Your Car, Nightstand, or Really Anywhere -</b> small enough to
                      easily fit in a bedroom drawer or cabinet, you can also toss it in your
                      backpack then easily stow in any car glove box or console.
                    </span>
                  </div>
                  <div className="w-full md:w-64 flex-shrink-0 rounded-lg overflow-hidden flex items-center">
                    <div className="relative w-full h-auto">
                      <Image
                        src="/contentimages/VNSH_Gun_Safe2.webp"
                        alt="Portable Design"
                        width={256}
                        height={256}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </li>

                <li className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1 flex items-start">
                    <div className="w-8 h-8 mr-3 relative top-1 flex-shrink-0">
                      <Image
                        src="/contentimages/greenCheck.png"
                        alt="Checkmark"
                        width={32}
                        height={32}
                        className="w-full h-auto"
                      />
                    </div>
                    <span className="mt-1">
                      <b>Not Just for Guns, Perfect for Other Valuables Too -</b> use it to lock up
                      cash, your personal IDs, watches and jewelry, or anything you don't want
                      swiped while you're not looking!
                    </span>
                  </div>
                  <div className="w-full md:w-64 flex-shrink-0 rounded-lg overflow-hidden flex items-center">
                    <div className="relative w-full h-auto">
                      <Image
                        src="/contentimages/VNSH_Gun_Safe3.webp"
                        alt="Versatile Use"
                        width={256}
                        height={256}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <p className="text-xl md:text-2xl font-medium leading-tight">Normally $50…</p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              The VNSH QuickLock is yours{' '}
              <b>
                <em>
                  <span className="bg-[#ff0] px-2 py-1text-red-600">totally FREE</span>
                </em>
              </b>{' '}
              with your holster order today!
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Plus, when you grab this deal, you’ll be doing so{' '}
              <b>
                <em>100% Risk-Free</em>
              </b>
              , because…
            </p>
            <div className="text-center my-8">
              <CallToActionButton />
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.0] text-[rgb(255,156,0)]">
                <div>You’re Getting An</div>
                <div className="my-0 md:my-2">
                  <span className="text-[rgb(255,0,0)]">Iron-Clad, Money-Back </span>
                  <span>Guarantee</span>
                </div>
              </div>
            </header>
            <div className="w-4/5 md:w-[30%] mx-auto max-w-[1120px] px-4 md:px-0">
              <Image
                src="/contentimages/guarantee-money-back-200.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Love everything about your order, or{' '}
              <b>
                <em>we’ll refund you every penny.</em>
              </b>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">It’s that simple.</p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              If you aren’t totally thrilled, all you have to do is contact our{' '}
              <b>
                <em>US-Based Support Team</em>
              </b>{' '}
              within 60 days to get a full refund.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              <span className="bg-[#ff0] px-2 py-1">
                Plus, we also give you a{' '}
                <b>
                  <em>2-year workmanship guarantee</em>
                </b>{' '}
                as well!
              </span>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              We know you’ll love your VNSH gear, which is why we’re happy to extend you these
              iron-clad guarantees.
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              So if you want to get an awesome price on the world’s most comfortable holster…
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              <b>
                <em>Plus… get a FREE VNSH QuickLock with it…</em>
              </b>
            </p>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Then you owe it to yourself to grab this deal now!
            </p>
            <div className="text-center my-8">
              <CallToActionButton />
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600">
                <span className="bg-[#ff0] px-2 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            {/* Testimonial Images */}
            <div className="w-full my-8">
              {/* Desktop Image */}
              <div className="hidden md:block">
                <Image
                  src="/contentimages/TestimoniesDesktop1.webp"
                  alt="Customer testimonials"
                  width={1400}
                  height={1000}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
              {/* Mobile Image */}
              <div className="block md:hidden">
                <Image
                  src="/contentimages/vnsh_TestimoniesMobile.webp"
                  alt="Customer testimonials mobile"
                  width={500}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
