import sharp from "sharp"
import path from "node:path"

const pub = path.resolve(process.cwd(), "public")
const src = path.join(pub, "logo-nucleo-lv.png")

// The source has a solid (near) white background. Derive an alpha channel from
// how far each pixel is from white so the white box disappears, then trim.
async function keyOutWhite(file) {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const out = Buffer.from(data)
  const HI = 236 // min-channel >= HI => background (alpha 0)
  const LO = 208 // min-channel <= LO => content (alpha 255)

  for (let i = 0; i < out.length; i += info.channels) {
    const m = Math.min(out[i], out[i + 1], out[i + 2])
    let a
    if (m >= HI) a = 0
    else if (m <= LO) a = 255
    else a = Math.round((1 - (m - LO) / (HI - LO)) * 255)
    out[i + 3] = a
  }

  return sharp(out, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  })
    .trim({ threshold: 1 })
    .png()
}

async function run() {
  // 1) Transparent gold logo for light backgrounds (header)
  const keyed = await keyOutWhite(src)
  await keyed.clone().toFile(path.join(pub, "logo-nucleo-lv-trimmed.png"))
  const meta = await sharp(path.join(pub, "logo-nucleo-lv-trimmed.png")).metadata()
  console.log("[v0] trimmed size:", meta.width, "x", meta.height)

  // 2) White version for the dark footer: keep alpha, force RGB to white
  const { data, info } = await keyed.raw().toBuffer({ resolveWithObject: true })
  const out = Buffer.from(data)
  for (let i = 0; i < out.length; i += info.channels) {
    if (out[i + 3] > 0) {
      out[i] = 255
      out[i + 1] = 255
      out[i + 2] = 255
    }
  }
  await sharp(out, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  })
    .png()
    .toFile(path.join(pub, "logo-nucleo-lv-white.png"))
  console.log("[v0] white logo written")
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
