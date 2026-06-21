---
title: "Fitbit Air Review: A 24/7 Health Band Alongside Garmin"
description: "Three weeks with the Fitbit Air, a $99 screenless health band. Sleep and nap tracking, auto activity detection, and heart-rate accuracy vs a Garmin HRM-Pro chest strap (indoor cycling MAE 0.41 bpm, outdoor 0.72 bpm)."
date: 2026-06-21
slug: fitbit-air-review
categories: ["Gear", "Tech"]
tags: ["Fitbit", "Heart Rate", "Wearables", "Garmin", "Gear Review", "Triathlon"]
image: wrist.webp
imageCaption: "12g and screenless. You barely feel it, and there's no reason to take it off at night."
review:
  name: "Fitbit Air"
  brand: "Fitbit"
  rating: 3.5
  price: 99.99
  currency: USD
---

**Verdict:** The Fitbit Air ($99.99, 12g, no screen) is a 24/7 health band that tracks sleep more accurately than Garmin and holds optical heart rate tight when the wrist is still — MAE 0.41 bpm indoor cycling and 0.72 bpm outdoor against a Garmin HRM-Pro chest strap. It won't replace a training watch (no screen, no GPS) and swim warm-up readings wander for the first 4–5 minutes, but as an always-on companion band — or a primary device for people who dislike sports watches — it's an easy recommend at the price.

Buy: [Amazon.com](https://amzn.to/4eUfxOr) · [Amazon JP](https://amzn.to/4eBLOsv)

---

## Why I bought it

The Fitbit Air caught my eye at launch: $99.99, no screen, built around 24/7 health monitoring. It sits close to WHOOP and the Oura Ring but costs a lot less. A ¥10,000 coupon that came with a phone purchase pushed me over the edge, so I picked one up. It's currently sold in Japan and the US.

My training and racing all run on Garmin: the watch, an HRM-Pro chest strap, a speed sensor, plus Wahoo POWRLINK Zero power pedals. The Fitbit Air isn't meant to replace that setup. It fills the gap Garmin doesn't cover well: continuous, 24/7 health data that never goes dark. After about three weeks, here's how it has held up across the board.

{{< figure src="box-open.webp" alt="Fitbit Air unboxing showing the tracker, woven band, and a USB-C charging cable" caption="In the box: the tracker, the band, and one USB-C charging cable." >}}

---

## Specs

| | Fitbit Air |
|---|---|
| Price | $99.99 (Stephen Curry edition $129.99) |
| Screen | None |
| Weight | 12g |
| Sensors | Optical HR, SpO2, skin temperature, EDA |
| GPS | None |
| Battery | ~7 days (5-min fast charge = 1 day) |
| Water resistance | 50m |
| Subscription | Core features free; Health Coach $10/mo (3 months included) |
| Platform | Android / iOS, supports Google Health Connect |
| Calibration | ~1 week (per Fitbit) |
| Availability | US, Japan, and other markets |

---

## Fit and setup

At 12g you barely notice it, and there's no reason to take it off at night. Setup runs through a Google account; in the Google Health app you set it to your dominant hand (right wrist for me). Fitbit notes a one-week calibration period, mostly for the Daily Readiness analysis; heart rate and sleep aren't really affected.

{{< figure src="hand-en.webp" alt="Setting the wrist preference for the Fitbit Air in the Google Health app" caption="Setup asks which wrist you wear it on." >}}

The band is comfortable and easy to adjust, but it takes a while to dry after swimming; the material is on the slow-drying side.

---

## Sleep and recovery

I wear a Garmin to bed too, so I have a direct comparison. Research has found Fitbit's sleep staging is generally more accurate than Garmin's [^1]; Garmin's edge is that sleep data is more deeply integrated with Body Battery and training load. In short: Fitbit wins on pure sleep staging, Garmin gives the more complete recovery picture. In practice I cross-check both and trust the Fitbit Air more for sleep itself.

There's one thing Garmin basically can't do: nap detection. Garmin misses short daytime naps; the Fitbit Air picks them up far more reliably. Scheduling an afternoon nap is a common recovery tactic in high-volume weeks, and counting it makes the recovery picture more complete.

{{< figure src="sleep-page.webp" alt="Fitbit Air detecting a nap and analyzing its effect on that night's sleep depth" caption="Naps get picked up, with an analysis of how they affect that night's sleep depth." >}}

Resting HR and HRV trend the same direction as Garmin, but Fitbit reads higher on both: a systematic offset from different algorithms. Watch the trend, not the absolute value.

{{< hr-trends >}}

There's a weekly cardio load target (it ramps up automatically with training volume) and a Readiness tab; I'm still watching those and haven't leaned on them yet.

Battery lasts a bit over six days per charge, matching the rated seven. The 5-minute = 1-day fast charge is handy; forgetting to charge isn't a real problem.

---

## Sport tracking

### Auto activity detection

Cycling and indoor cycling auto-detect reliably, no manual start needed. Running auto-detects and records too. Swimming registers as activity but you have to pick the sport manually; it won't recognize it as swimming on its own. I haven't done brick sessions lately, but detection on each individual discipline is solid.

Both Fitbit and Garmin auto-detect walks. The difference: Garmin only folds it into Body Battery and never shows it as a standalone activity, while Fitbit lists it as its own entry with time, distance, and heart rate, which is clearer when you look back at your day.

### Health Coach ($10/mo)

The purchase includes three months of Health Coach, so it's easy to try. I already have a coach, so I didn't lean on it much. Worth noting: you can photo-log meals (AI identifies the food and estimates nutrition), and you get AI feedback after each workout. After a swim, for example, it'll say "That was a solid shift in the pool" and summarize intensity distribution and peak heart rate. The advice skews toward emotional encouragement, though, so for anyone on a structured plan the added value is limited.

{{< figure src="nap-detection.webp" alt="Fitbit Air Health Coach post-workout AI feedback card" caption="Health Coach's post-workout AI feedback. The analysis is in English regardless of app language." >}}

---

## Heart rate comparison: 6 scenarios

I have a Garmin HRM-Pro chest strap, so I set up a few scenarios to compare. Swimming has no chest-strap reference (wearing one in the water isn't practical), so there I can only measure how far the two optical sensors diverge.

The sections below use MAE (Mean Absolute Error): the average of the absolute difference between the two readings at each timestamp. Lower means closer to the reference.

**Test hardware:**
- Fitbit Air (right wrist, dominant hand)
- Garmin Fenix 8 (left wrist, built-in Gen5 optical)
- Garmin HRM-Pro chest strap (ANT+ to the Fenix 8)
- CORE body-temperature sensor (indoor cycling; HRM → CORE → Zwift FIT export)

I've written up the CORE sensor separately: [Heat Acclimatization Training with the CORE Sensor](../heat-acclimatization-training-core-sensor/).

### Interactive chart

{{< hr-comparison >}}

### Indoor cycling (Fitbit MAE 0.41 bpm)

The HRM-Pro fed the CORE body-temperature sensor and recorded through Zwift; the HRM's ANT+ signal goes straight into the Zwift FIT export, so the reference is reliable.

| Metric | Garmin HRM (Zwift) | Fitbit Air | Garmin Watch Optical |
|---|---|---|---|
| Avg HR | 151 bpm | 151 bpm | 154 bpm (second half) |
| Max HR | 173 bpm | — | 172 bpm |
| MAE vs HRM | — | **0.41 bpm** | **1.38 bpm** (second half) |

The watch only started recording partway in (around 39 min), so it covers just the second half. The Fitbit Air held MAE 0.41 bpm the whole time. Indoor cycling is the ideal case for optical HR: no trainer vibration, the wrist stays still, good circulation.

### Outdoor cycling (MAE 0.72 bpm)

Stationary segments (11 of them, including a ~26-minute aid stop) were removed from the data.

| Metric | Garmin HRM-Pro | Fitbit Air |
|---|---|---|
| Avg HR | 140 bpm | 139 bpm |
| Max HR | 155 bpm | 155 bpm |
| MAE | — | **0.72 bpm** |
| Error >10 bpm | — | <1% (1 of 1172 points) |

Rough roads, wind, and shifting position make the numbers a touch worse than indoors, but 0.72 bpm is about what you'd expect from optical HR here. No cumulative drift over 3.5 hours.

### Swimming (two-watch divergence, no reference)

In his Garmin Fenix 8 review, DC Rainmaker notes that even the best optical sensors are "at best questionable" for accuracy in the water [^2]. Swimming has no chest-strap reference, so the numbers below are the **divergence** between the two optical sensors, not a measure of which is right.

Both sessions showed the same pattern: large divergence during warm-up, readings converging once the main set hit higher intensity.

**Session 1 (200m intervals, 37 min)**

| Segment | Divergence |
|---|---|
| Warm-up (first 9 min) | 14.4 bpm |
| High-intensity main set (15:25–32:40) | **1.3 bpm** |

**Session 2 (3×500m + 12×25m sprints, 44 min)**

| Metric | Garmin Fenix 8 | Fitbit Air |
|---|---|---|
| Avg HR | 148 bpm | 147 bpm |
| Max HR | **180 bpm** | **181 bpm** |
| Warm-up divergence (first 5 min) | — | 17.5 bpm |
| Main-set divergence (after 5 min) | — | **1.6 bpm** |

The 180 bpm peaks are just 1 bpm apart. The two readings split about 4–5 minutes after entering the water, then converge in the main set. Which one is more accurate is impossible to say.

### Running

**Long run (109 min):** MAE 2.09 bpm over the steady portion, averages matching at 147–148 bpm, and Fitbit auto-detected it. But the TCX export has only 55 data points (about one every 2 minutes), and max HR differs by 5 bpm (Garmin 162 vs Fitbit 157): the low resolution smooths the peak away.

**Interval run (52 min):** MAE 2.2 bpm, average 153 bpm, and the 182 bpm peak matches exactly. At the 20-minute mark there's a +16 bpm instantaneous gap; Garmin was already climbing into the next surge while Fitbit was still in recovery, converging about 60 seconds later. This start-up lag is a known optical-sensor limitation on sharp HR rises.

---

## Data and platform integration

Data connects to Strava (through the Fitbit app's native connector), and full export goes through Google Takeout. Training Peaks has no native integration and needs a third-party bridge. For anyone already recording training on a Garmin watch, though, these limits barely matter; the Fitbit Air is built for health tracking, not as a primary training device.

---

## Pros and cons

**Pros**
- Light (12g) and comfortable; you don't feel it while sleeping
- Accurate nap detection, which Garmin basically can't do
- Sleep staging more accurate than Garmin at 40% of the price
- Indoor cycling MAE 0.41 bpm; outdoor 0.72 bpm
- High-intensity swim readings match across both watches (1.3 / 1.6 bpm divergence)
- ~7-day battery, 5-min fast charge = 1 day
- Core features need no subscription

**Cons**
- Large warm-up divergence in swimming (first 4–5 minutes in the water)
- Low TCX resolution on long runs (~1 point/2 min), 5 bpm peak gap; ~60s optical lag at interval surges
- No screen, so no live HR during training
- No GPS, can't be a primary training device
- Slow band drying after swims
- Health Coach offers limited value if you have a coach or a structured plan

---

## Who it's for

**Best fit:** people who don't like wearing a sports watch and prefer a mechanical or plain watch, but still want complete health data, including those who don't like sleeping in a bulky watch. For them the Fitbit Air is the primary device, not a supplement, and its sleep tracking is more accurate than Garmin's to begin with.

**Also good for:** athletes who already have a Garmin (or similar) and want 24/7 health data with no gaps. Garmin for training and racing, Fitbit Air the rest of the time, no blind spots, and sleep data in particular gets a useful second opinion by cross-checking the two.

**Not for:** anyone who wants live data during training (no screen), whose main sport is swimming (shaky warm-up detection), or who wants all their data in a single platform.

---

## Verdict

At $99.99, 12g, with sleep tracking more accurate than Garmin's, the Fitbit Air is a 24/7-data companion band for athletes and a primary device for people who don't like sports watches. The heart-rate comparison landed about where I expected across every scenario, and nap detection fills a real Garmin gap. You do have to accept the shaky swim warm-up detection, though it barely matters for health-tracking use. At this price, it makes a lot of sense.

---

## Data and method

- Garmin: Garmin Connect `.fit` (HRM-Pro ANT+ data / Fenix 8 optical)
- Fitbit Air: Google Health app `.tcx`
- Time alignment: Garmin activity UTC start time as t=0
- Interpolation: linear, onto a unified time axis
- Stationary detection: speed < 0.5 m/s for > 20 s
- Language: Python 3, fitparse

---

## References

[^1]: Chinoy ED et al. (2021). Performance of seven consumer sleep-tracking devices compared with polysomnography. *Sleep*, 44(5). [PMC8120339](https://pmc.ncbi.nlm.nih.gov/articles/PMC8120339/)
[^2]: DC Rainmaker. Garmin Fenix 8 In-Depth Review. [dcrainmaker.com](https://www.dcrainmaker.com)
