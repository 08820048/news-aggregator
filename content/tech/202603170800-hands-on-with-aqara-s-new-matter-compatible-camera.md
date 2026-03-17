---
title: "Hands on with Aqara’s new Matter-compatible camera"
source: "Jennifer Pattison Tuohy"
url: "https://www.theverge.com/tech/895326/aqara-g350-matter-camera-samsung-smartthings-hands-on-review"
published: "2026-03-17T08:00:00.000Z"
category: "tech"
summary: "The Aqara G350 is the first camera you can buy that has support for Matter. The first Matter camera is here - sort of. Camera support came to the smart home standard last year, and Aqara's Camera Hub G350 is the first to support it. The G350, which was announced at CES, launched this week and is a pan-and-tilt indoor security camera with up to 4K video resolution. Today, the G350 only supports Matter on Samsung SmartThings, as none of the other platforms have added Matter 1.5 yet. I've only had the camera setup for a day, and it took several firmware updates before I could connect it as a Matter camera. So far, all it can do is stream a live feed, which is far less than what Samsung promises Matter cameras in Smar … Read the full story at The Verge."
---
The first Matter camera is here — sort of. Camera support came to [the smart home standard last year](https://www.theverge.com/tech/821707/matter-smart-home-standard-supports-cameras-apple-ring-google-nest), and [Aqara’s Camera Hub G350](https://www.aqara.com/en/product/camera-hub-g350/) is the first to support it. The G350, which was [announced at CES](https://www.theverge.com/tech/854695/aqara-came-to-ces-with-something-to-prove#:~:text=The%20dual%2Dlens,older%20Aqara%20devices.), launched this week and is a pan-and-tilt indoor security camera with up to 4K video resolution.

Today, the G350 only supports [Matter on Samsung SmartThings](https://www.theverge.com/tech/847857/smartthings-is-the-first-platform-to-support-matter-cameras), as none of the other platforms have added Matter 1.5 yet. I’ve only had the camera setup for a day, and it took several firmware updates before I could connect it as a Matter camera. So far, all it can do is stream a live feed, which is far less than what [Samsung promises Matter cameras in SmartThings will do](https://blog.smartthings.com/smartthings-updates/smartthings-expands-camera-support-with-introduction-of-matter-1-5/). But there’s plenty of potential here.

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5587.jpeg?quality=90&strip=all&crop=16.666666666667%2C0%2C66.666666666667%2C100&w=2400)](https://www.amazon.com/dp/B0G4W6R4SG?tag=theverge02-20)[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5587.jpeg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://www.amazon.com/dp/B0G4W6R4SG?tag=theverge02-20)

$140

The G350 has impressive specs for an indoor camera. It boasts dual-lenses — a 4K wide-angle lens and a 2.5K telephoto lens — and up to 9x hybrid zoom. A compact pan-tilt mechanism provides 360-degree coverage with auto-tracking for people and pets, and a physical lens shutter activates when the camera is turned off.

Along with Matter, the Aqara G350 supports [Apple’s HomeKit Secure Video service](https://www.theverge.com/tech/890910/best-ring-alternatives-privacy-focused-video-doorbell-local-storage-reolink-aqara-tapo-ecobee#:~:text=Apple%E2%80%99s%20HomeKit%20Secure%20Video%20\(HKSV\)) and can connect to Amazon Alexa, Google Home, and other platforms via the cloud. You can also store footage locally on a microSD card, and RTSP support enables streaming video to platforms like Home Assistant and NVRs. Aqara offers its own cloud storage service, [which is end-to-end encrypted](http://End-to-End encrypted cloud storage*** and Integrated Events with HomeGuardian plan.).

[![The Aqara G350 works with Matter, but currently, only Samsung SmartThings supports Matter cameras.](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5573.jpeg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5573.jpeg?quality=90&strip=all&crop=0,0,100,100)

_The Aqara G350 works with Matter, but currently, only Samsung SmartThings supports Matter cameras._

While the G350 worked perfectly in the Aqara app, my Matter experience with it was less so. My first attempts to onboard the camera directly to SmartThings by scanning its Matter code failed, adding the device as a hub rather than a camera. (Like many of Aqara’s cameras, the G350 is also a smart home hub for Aqara’s Zigbee devices, plus it’s a Matter controller, bridge, and Thread Border Router.)

Instead, I added it to Aqara’s app. Here, it showed as a camera and eventually offered me several firmware updates, one of which brought Matter 1.5 support, finally allowing me to add it to SmartThings as a camera using Matter’s multi-admin feature. (You’ll need a [SmartThings Matter Controller](https://blog.smartthings.com/smartthings-updates/smartthings-expands-camera-support-with-introduction-of-matter-1-5/#:~:text=Together%2C%20these%20features,a%20single%20platform.) to connect to the platform.)

[![<em>Connecting the G350 took some time, as out of the box, it hadn’t been updated to Matter.</em>](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/Screenshot_20260315-132215_SmartThings.jpg?quality=90&strip=all&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/Screenshot_20260315-132215_SmartThings.jpg?quality=90&strip=all)

[![<em>At first, it only connected as a Matter Bridge, but after several firmware updates through the Aqara app, I was able to get it connected as a camera in SmartThings.</em>](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/Screenshot_20260315-132100_SmartThings.jpg?quality=90&strip=all&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/Screenshot_20260315-132100_SmartThings.jpg?quality=90&strip=all)

[![<em>It requires a SmartThings Matter controller to connect.</em>](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/Screenshot_20260315-132322_SmartThings.jpg?quality=90&strip=all&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/Screenshot_20260315-132322_SmartThings.jpg?quality=90&strip=all)

[![<em>However, the interface on Android wasn’t working for me, this is the Settings page for the camera.</em>](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/Screenshot_20260316-134101_SmartThings.jpg?quality=90&strip=all&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/Screenshot_20260316-134101_SmartThings.jpg?quality=90&strip=all)

**1/4**

_Connecting the G350 took some time, as out of the box, it hadn’t been updated to Matter._

One of the promised benefits of Matter-supported cameras is the ability to manage all your cameras through your main smart home platform, without being limited by brand.

Today, if you have a mix of cameras — say a Ring Doorbell, an Aqara indoor camera, and a Eufy floodlight camera — you’ll need to use multiple apps to access all the features. And while you can stream live views from many different camera brands with a platform like Alexa, you can’t view recorded video or adjust settings like pan and tilt without going to the manufacturer’s app. Matter supports all those features and could bring you closer to using just one app to manage your smart home.

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5563.jpeg?quality=90&strip=all&crop=0.00893974611121%2C0%2C99.982120507778%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5563.jpeg?quality=90&strip=all&crop=0.00893974611121,0,99.982120507778,100)

_The G350 is a smart home camera and hub._

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5580.jpeg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5580.jpeg?quality=90&strip=all&crop=0,0,100,100)

_It has three QR codes: an Aqara code, a Matter code, and an Apple Home code on the base._

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5581.jpeg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5581.jpeg?quality=90&strip=all&crop=0,0,100,100)

_It’s powered by an included USB-C cable, but you need to provide your own brick._

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/IMG_4564.jpg?quality=90&strip=all&crop=0%2C5.5555555555556%2C100%2C88.888888888889&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/IMG_4564.jpg?quality=90&strip=all&crop=0,5.5555555555556,100,88.888888888889)

_The cute silicone bunny ears are removable._

Integrating cameras into your smart home app also allows for more advanced automations, such as “when I unlock the door, turn on the lights, and turn the camera off.”

With Matter, security cameras can support live video and audio streaming, two-way talk, and local and remote access. The standard also allows pan-tilt-zoom controls for the cameras, the setting of detection and privacy zones, and continuous and event-based recording with the ability to store footage locally or in a cloud service (with the option of end-to-end encryption) — all within the smart home platform app.

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/IMG_4568.PNG.png?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/IMG_4568.PNG.png?quality=90&strip=all&crop=0,0,100,100)

_The main camera page on iOS shows a livestream with options to take a snapshot, toggle the microphone or speaker on or off, and view the video in full screen._

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/IMG_4570.PNG.png?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/IMG_4570.PNG.png?quality=90&strip=all&crop=0,0,100,100)

_The livestream at night. There is an option to toggle night vision on/off/auto in Settings, as well as enable any built-in LED lights._

[According to Samsung](https://blog.smartthings.com/smartthings-updates/smartthings-expands-camera-support-with-introduction-of-matter-1-5/), the SmartThings app should offer all of those features, though not all are available yet. I was only able to view a livestream, take a snapshot, and use two-way talk. While I saw controls for pan, tilt, and zoom, and a tab for video history, I wasn’t able to use them. According to the [Matter Alpha blog](https://www.matteralpha.com/news/matter-camera-first-look-with-aqara-g350-and-smartthings#:~:text=These%20layout%20options%20appear%20even%20though%20the%20G350%E2%80%99s%20current%20firmware%20does%20not%20yet%20allow%20digital%20pan%2C%20tilt%2C%20or%20zoom%20through%20Matter.%20Aqara%20is%20expected%20to%20add%20these%20features%20in%20future%20updates.), this is because the G350 doesn’t support pan-tilt controls in Matter yet, but they should be coming via a firmware update.

The livestream was clear and responsive, and it loaded instantly with no lag, with only a second or two of initial buffering. Two-way talk worked well, and I could hear and be heard clearly. Matter is a local protocol, and you really see its benefits here.

A settings page showed options for motion-activated recording, adjusting the camera’s resolution and volume, and creating presets to monitor different areas. However, only the volume and resolution buttons worked. I couldn’t toggle on recording or view any recorded video in the SmartThings app’s History tab, even with a microSD card in the camera. The scrollable timeline just said “no history.”

[![<em>The video history tab presents a scrollable timeline.</em>](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/Screenshot_20260316-134048_SmartThings.jpg?quality=90&strip=all&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/Screenshot_20260316-134048_SmartThings.jpg?quality=90&strip=all)

[![<em>Toggles for pan, tilt, and zoom aren’t active on the G350 yet.</em>](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/IMG_4568.png?quality=90&strip=all&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/IMG_4568.png?quality=90&strip=all)

[![<em>The Settings page includes options for configuring the camera directly in the SmartThings app.</em>](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/IMG_4567.png?quality=90&strip=all&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/IMG_4567.png?quality=90&strip=all)

**1/3**

_The video history tab presents a scrollable timeline._

It’s not clear whether you’ll need a subscription to view recorded footage through SmartThings, or if you’ll need to use Aqara’s service, starting at $4.99 a month / $49.99 annually, if you don’t use local storage. I’ve reached out to Samsung to confirm and will update this article when I know more.

There wasn’t any option in the app to enable smart alerts, such as facial recognition and package and vehicle alerts, that the G350 offers. For those, you’ll still need to rely on Aqara’s app.

I did have a weird experience with Android versus iOS. Only the livestream showed in the SmartThings app on my Galaxy S22 Ultra, no controls. It also just showed a blank settings screen. But on my iPhone 17 Pro, the controls were visible, as was the settings page.

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5587.jpeg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5587.jpeg?quality=90&strip=all&crop=0,0,100,100)

_When turned on, the G350’s camera lenses resemble eyes, and an LED light glows._

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5586.jpeg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/8A0A5586.jpeg?quality=90&strip=all&crop=0,0,100,100)

_When off, it shuts its “eyes” and the light turns off._

[![](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/IMG_4563.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400)](https://platform.theverge.com/wp-content/uploads/sites/2/2026/03/IMG_4563.jpg?quality=90&strip=all&crop=0,0,100,100)

_You insert the microSD card in the G350’s “mouth,” which you access by pushing the face upward._

As mentioned, only SmartThings currently supports Matter cameras. It’s likely [Apple will follow suit (at some point)](https://www.theverge.com/tech/821707/matter-smart-home-standard-supports-cameras-apple-ring-google-nest#:~:text=But%20it%20seems,gotten%20a%20response.), and Home Assistant has said it’s [working on support](https://www.theverge.com/tech/821707/matter-smart-home-standard-supports-cameras-apple-ring-google-nest#:~:text=Home%20Assistant%E2%80%99s%20Gord,implement%20Matter%20cameras.%E2%80%9D). But I’m not expecting Google Home or Amazon Alexa to get on board anytime soon — if ever. Neither has committed to support, and both have their own camera ecosystems. So, the simple setup and seamless management of security cameras in a single app may still be a long way off.

However, while my first experience with cameras in Matter was very basic, it shows promise. I can see a future (if everyone gets on board) where Matter camera support resembles Apple’s HomeKit Secure Video — only more open and interoperable.

The benefits of Apple’s implementation — cameras more integrated into your smart home, brand-agnostic, and secure and private — are features every smart home user would be happy to see. Right now, all we have is the first camera to support Matter, and most of its features aren’t working yet. But it’s a start.

_Photography by Jennifer Pattison Tuohy / The Verge_

**Follow topics and authors** from this story to see more like this in your personalized homepage feed and to receive email updates.

-   Jennifer Pattison Tuohy
