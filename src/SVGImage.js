import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {SVG} from '@svgdotjs/svg.js'
import Numeral from 'numeral'

const SVGImage = () => {
  const {owner, repo} = useParams()

  useEffect(() => {
    fetch(`https://api.github.com/search/repositories?q=${owner}/${repo}`).then(rs => rs.json()).then(rs => {
      const r = rs.items.find(i => i.full_name === `${owner}/${repo}`)
      if (!r) return

      const draw = SVG().addTo('body').size(73, 25)
      const rect = draw.rect(73, 25).attr({fill: '#eff3f6'}).radius(4).stroke({width: 1, color: '#333'})
      const group = draw.group()
      const group2 = draw.group()
      const line = draw.line(15, 0, 15, 25).stroke({width: 1, color: '#333'}).dx(10)
      const text = draw.text(Numeral(r.stargazers_count).format('0a').toString().toUpperCase()).dx(25).dy(-7)
      const star = draw.path('M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z')

      group2.add(star).add(text).dx(6).dy(3)
      group.add(rect).add(line).add(group2)
    })
  }, [])

  return <div></div>
}

export default SVGImage
