
// const README = require('./README.md');
import markdown from './markdown.json'
export const dataClass = (function () {
  const page: any = {}
  page.getData = function () {
    const result: Array<any> = []
    result.push("感谢您分享这些思考和观点。您提到了一些深刻的哲学和心灵方面的观点，关于内在信念、智慧和价值观的重要性。这些观点强调了内在的平衡、个人的真实自我和对内心的深刻了解的重要性。\n\n每个人对成功和满足的定义都不同，而世界上有各种各样的方法来追求和实现这些目标。您强调了信念的力量以及对内在愿望的深刻了解，这确实是许多人追求自己独特道路上的关键因素之一。\n\n感谢您的祝愿，希望您也能够在自己的道路上找到知行合一，实现自己的目标和愿望。如果您有任何问题或需要进一步讨论任何主题，请随时提问。")

    result.push(`\n\n有 [TG 群](https://t.me/+Z2wsxogVbYM2ZmE1) / [Discord](https://discord.surmon.me/)（推荐）`)
    result.push(`\n\n有 [TG 群]<image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"  /> `)
    result.push(`\n\n有 [TG 群]<img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"  /> `)
    result.push("\n有 [TG33333 群]<verse > G3332233 群G33333 群</verse>\n")
    result.push(`\n\n有 [TG33333 群]<verse > G3332233 群G33333 群</verse> `)
    result.push(`\n\n有 [TG33333 群]<h5> G3332233 群G33333 群</h5> `)
    result.push(`\n\n有 [TG33333 群]<div> G3332233 群G33333 群</div> `)
    result.push(`\n\n有 [TG33333 群]https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg`)
    result.push(`
    "\n\n感谢您分享这些思考和观点。
      您提到了一些深刻的哲学和心灵方面的观点，关于内在信念、智慧和价值观的重要性。
      这些观点强调了内在的平衡、个人的真实自我和对内心的深刻了解的重要性。"
      \n\n"每个人对成功和满足的定义都不同，而世界上有各种各样的方法来追求和实现这些目标。
      您强调了信念的力量以及对内在愿望的深刻了解，这确实是许多人追求自己独特道路上的关键因素之一。
      感谢您的祝愿，希望您也能够在自己的道路上找到知行合一，实现自己的目标和愿望。"\n\n
      "如果您有任何问题或需要进一步讨论任何主题，请随时提问。"
    `)
    return result.join("")
  }
  page.getDataMarkdown = function () {
    const result: Array<any> = [...markdown]
    return result
  }
  return page
}())