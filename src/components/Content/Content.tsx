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
      <div className="w-full max-w-[1240px] mx-auto px-5 py-4 lg:px-20 bg-white">
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
            <div className="text-xl md:text-3xl font-bold text-black px-4">
              <span className="bg-[#ff0] px-1 py-1 md:px-2 md:py-1 italic leading-normal">
                Plus a "Virtual Steel" Target You Can Ring All Day to
                <br className="hidden md:block" /> Your Heart's Content!
              </span>
            </div>
          </div>

          <div className="text-center my-8">
            <CallToActionButton />
          </div>

          <header className="text-center py-1">
            <span className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.2] text-[#f16500]">
              The Simplest Way to <span className="text-red-600">Get DEAD Accurate FAST…</span>
            </span>
          </header>
          <div className="w-full text-center my-2">
            <div className="text-base md:text-2xl font-bold text-black px-1 py-1 inline-block">
              <span className="bg-[#ff0] px-1 py-1 italic">
                (From the Comfort of Your Living Room!)
              </span>
            </div>
          </div>
          <div className="space-y-4 text-xl font-medium leading-tight md:text-2xl">
            <p>Question for you…</p>
            <p>
              Wouldn't you love to know that{' '}
              <span className="font-bold italic">every time you draw and shoot your gun</span>,{' '}
              <u>you'll hit exactly what you're aiming for?</u>
            </p>
            <p>Over and over again… with lightning-fast speed?</p>
            <p>
              The answer should obviously be a huge <span className="font-bold">YES!</span>
            </p>
            <p>
              That's every shooter's dream:{' '}
              <span className="font-bold">to be as deadly accurate and fast as the pros.</span>
            </p>
            <p className="font-bold italic inline-block px-1">
              Here's a little secret…{' '}
              <span className="bg-[#ff0] px-1 py-1">anyone can become that good.</span>
            </p>
            <p>The only problems are:</p>
            <div className="pl-8">
              <ol className="list-decimal font-bold space-y-2">
                <li className="pl-2">It's impossible to find enough time to train…</li>
                <li className="pl-2">
                  Shooting enough to get that kind of skill is crazy expensive!
                </li>
              </ol>
            </div>
            <p>
              That’s where the <span className="underline">new and enhanced</span> VNSH Laser Strike
              Training System comes in…
            </p>
            <p>
              People already <span className="font-bold">LOVED</span> this system…{' '}
              <span className="font-bold italic">but we’ve made it even better</span>, so it feels
              like…
            </p>
          </div>
          <header className="text-center py-1 my-6">
            <span className="text-2xl md:text-4xl font-bold leading-tight md:leading-normal text-[#f16500]">
              The Closest Thing to a{' '}
              <span className="text-red-600">"Private Range With Unlimited Free Ammo</span> In Your
              Garage!
            </span>
          </header>
          <div className="w-full text-center my-2">
            <div className="text-base md:text-2xl font-bold text-black px-1 py-1 inline-block">
              <span className="bg-[#ff0] px-1 py-1 italic">
                Guaranteed Tighter Groups - Or You Don’t Pay a Dime…
              </span>
            </div>
          </div>
          <div className="w-full md:w-[70%] mx-auto max-w-[1120px] px-4 md:px-0">
            <Image
              src="/contentimages/LSS_new_image.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="space-y-4">
            <p className="content-paragraph">
              The VNSH Laser Strike Training System is a revolutionary dry fire laser training
              platform that simulates shooting live rounds{' '}
              <span className="italic font-bold">as closely as possible…</span>
            </p>
            <p className="content-paragraph">
              …so you can practice any time, any place, and{' '}
              <span className="italic font-bold">without spending a single penny</span> on range
              time or ammo!
            </p>
            <p className="content-paragraph">
              It's the easiest way to get the extra practice{' '}
              <span className="font-bold">you must have</span> to gain maximum accuracy and
              confidence with your firearm.
            </p>
            <p className="content-paragraph">
              And it also{' '}
              <span className="underline font-bold">
                saves you $100s – if not $1,000s – of dollars in the process.
              </span>
            </p>
            <p className="content-paragraph">
              By removing the time and cost of shooting live rounds…
            </p>
            <p className="content-paragraph">
              The Laser Strike System{' '}
              <span className="font-bold">gives you an "unfair advantage"</span> to becoming the
              best shooter possible.
            </p>
            <p className="content-paragraph">That's the simple reason why…</p>
          </div>
          <header className="text-center py-1 my-6">
            <span className="text-2xl md:text-4xl font-bold leading-tight md:leading-normal text-[#f16500]">
              1,000s of Gun Owners Have Used It to{' '}
              <span className="text-red-600">Kill Their Bad Shooting Habits…</span> Like a Cheat
              Code for Better Accuracy and Speed!
            </span>
          </header>
          <div className="space-y-4">
            <p className="text-base md:text-lg leading-relaxed">
              What does it take to become the{' '}
              <span className="italic font-bold">best shooter possible?</span>
            </p>
            <p className="text-base md:text-lg leading-relaxed underline">
              It takes thousands of trigger pulls!!
            </p>
            <p className="text-base md:text-lg leading-relaxed font-bold">
              Just listen to World Champion marksman Robert Vogel…
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              When asked “How often do you dry fire?” he replied…
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              <span className="bg-[#ff0] px-1 py-1 font-extrabold italic">
                “In one form or another, just about every day. For sheer skill building I feel it
                has no equal. For every live round that I actually fire,{' '}
                <span className="underline">
                  I probably mimic that round eight to 10 times in dry fire."
                </span>
              </span>
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              See, even the professionals can’t afford to spend countless hours in the range.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              And they know dry fire training is the best shortcut to get their volume in.``
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              But the Laser Strike System{' '}
              <span className="font-bold underline">upgrades traditional dry fire</span> training
              <span className="font-bold italic"> from a shortcut to a full-on cheat code!</span>
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Because instead of just letting you practice your draw, trigger pull, and gun
              handling…
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              The Laser Strike System lets you{' '}
              <span className="font-bold italic">
                simulate putting rounds on target{' '}
                <span className="underline">with instant feedback!</span>
              </span>
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              For anyone who LOVES to shoot… and wants to max out their confidence and accuracy…{' '}
              <span className="font-bold italic">
                but just doesn’t have the time, money, and ammo to do it at the range…
              </span>
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              The Laser Strike System is a must-have.
            </p>
            <p className="text-base md:text-lg leading-relaxed">Even better though…</p>
          </div>
          <div className="text-center my-8">
            <CallToActionButton />
          </div>
          <div className="text-center my-8">
            <p className="text-xl md:text-xl font-semibold leading-normal text-red-600 italic">
              <span className="bg-[#ff0] px-1 py-1">
                60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
              </span>
            </p>
          </div>

          <div className="w-full max-w-7xl mx-auto space-y-6">
            <header className="text-center py-1 my-6">
              <span className="text-2xl md:text-4xl font-bold leading-tight md:leading-normal text-amber-500">
                This System Is <span className="text-red-600">Stupid-Simple to Use!</span>
              </span>
            </header>
            <div className="w-full text-center my-2">
              <div className="text-base md:text-2xl font-bold text-black px-1 py-1 inline-block">
                <span className="bg-[#ff0] px-1 py-1 italic">(5-Minute Setup Anywhere)</span>
              </div>
            </div>
            <div className="mx-auto w-full md:max-w-[80%]">
              <Image
                src="/contentimages/LaserStrikeDemoV2SNoGlitch.webp"
                alt="Laser Strike System"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <div className="space-y-4 text-xl font-medium leading-tight md:text-2xl">
              <p>
                Since the whole point of the Laser Strike System is to{' '}
                <span className="font-bold italic">get you dead accurate as fast as possible</span>…
              </p>
              <p className="mb-4 font-bold">
                …we knew we had to make it as easy to use as possible too.
              </p>
              <p className="mb-4">So that’s exactly what we did:</p>
            </div>
            <div className="mb-8 -ml-4 md:-ml-6">
              <ul className="space-y-5 text-xl font-medium leading-tight md:text-2xl pl-4 md:pl-6">
                {[
                  {
                    step: 'Step #1 - Insert the Laser Cartridge:',
                    text: ' With a gorgeous graf metal finish, our laser cartridge is engineered to fit perfectly in your firearm – featuring a soft rubber backing that absorbs the impact of your firing pin to activate the laser inside.',
                  },
                  {
                    step: 'Step #2 - Set Up Your Target:',
                    text: ' For more relaxed plinking, just stick the "virtual steel" target on any wall and start shooting (more on this in a second). Or to analyze your groups more closely, do a quick setup with the included paper targets, tripod, and smartphone app.',
                  },
                  {
                    step: 'Step #3 - Start Training and Be Amazed:',
                    text: " Set aside a few minutes to use your Laser Strike System every day, and we guarantee you'll watch your accuracy skyrocket!",
                  },
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
                    <span className="mt-1">
                      <strong>{item.step}</strong>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 text-xl font-medium leading-tight md:text-2xl">
              <p>As you can see…</p>
              <p>
                The Laser Strike System{' '}
                <span className="font-bold italic">removes all barriers</span> to train daily and
                get insanely accurate.
              </p>
              <p>
                But it now includes something that{' '}
                <span className="font-bold italic underline">
                  makes training more FUN than ever, which is…
                </span>
              </p>
            </div>
            <header className="text-center py-1 my-6">
              <span className="text-2xl md:text-4xl font-bold leading-tight md:leading-normal text-amber-500">
                This New <span className="text-red-600">“Virtual Steel” Target</span> That Gives You
                Instant Audible Feedback…
              </span>
            </header>
            <div className="w-full text-center my-2">
              <div className="text-base md:text-2xl font-bold text-black px-1 py-1 inline-block">
                <span className="bg-[#ff0] px-1 py-1 italic">(Like Duck Hunt for Grown-Ups)</span>
              </div>
            </div>
            <p>
              By far the coolest thing about the new Enhanced Laser Strike System is the fact it
              comes with a “virtual steel” target – which works seamlessly with your laser cartridge
              insert.
            </p>
            <p>
              Just rack the insert, fire at the digital steel, and grin ear-to-ear every time you
              hear it PING! 🤠
            </p>
            <p>
              But that’s just one of the things that makes this breakthrough dry fire system so
              awesome…
            </p>
            <div className="text-center my-8">
              <CallToActionButton />
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-xl font-semibold leading-normal text-red-600 italic">
                <span className="bg-[#ff0] px-1 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
            <header className="text-center py-1">
              <div className="text-[25px] md:text-[36px] font-bold leading-tight md:leading-[1.0] text-[rgb(255,0,0)]">
                6 Reasons
                <span className="text-[rgb(255,156,0)]">
                  {' '}
                  the Laser Strike Will Help You Make the Shot{' '}
                </span>
                <span>You Can’t Afford to Miss…</span>
              </div>
            </header>
            <p>
              You carry a gun for <span className="font-bold">1 simple reason:</span>{' '}
              <span className="underline">
                to be able to defend your life and the lives of your loved ones.
              </span>
            </p>
            <p>And if you’re ever forced to deploy your firearm…</p>
            <p>
              You may not have more than a <span className="font-bold italic">few moments</span> and
              a <b>single shot</b> to do it effectively. That’s why it’s{' '}
              <span className="font-bold underline">so critical</span> to achieve the split-second
              level of accuracy the Laser Strike System can give you!
            </p>
            <p>
              It lets you <span className="font-bold italic">finally gain</span> the “second nature”
              response to reliably draw and put rounds on target{' '}
              <span className="font-bold italic">without thinking about it one bit. </span>
            </p>
            <p>And it lets you do it far faster than range time with live rounds alone!</p>
            <p>
              That simple fact alone is reason enough to own one, but that’s not the only thing that
              makes it great:
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
            <div className="text-center my-8">
              <CallToActionButton />
            </div>
            <div className="text-center my-8">
              <p className="text-xl md:text-1xl font-semibold leading-normal md:leading-tight text-red-600 italic">
                <span className="bg-[#ff0] px-1 py-1">
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
              <span className="bg-[#ff0] px-1 py-1">
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
                <span className="bg-[#ff0] px-1 py-1">
                  60 Days to Try It Yourself… Love It Or You Don't Pay a Dime!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
