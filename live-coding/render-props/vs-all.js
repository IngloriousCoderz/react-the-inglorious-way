const SimpleList = ({ whos }) => (
  <ul style={styles.list}>
    {whos.map(who => (
      <li>{who}</li>
    ))}
  </ul>
)

const ComplexList = ({ renderEven, renderOdd, whos }) => (
  <ul style={styles.list}>
    {whos.map((who, index) => (index % 2 ? renderEven(who) : renderOdd(who)))}
  </ul>
)

const Parent = ({ whos, simple }) => {
  if (simple) return <SimpleList whos={whos} />

  return (
    <ComplexList
      renderEven={who => <li style={styles.even}>{'Even ' + who}</li>}
      renderOdd={who => <li style={styles.odd}>{'Odd ' + who}</li>}
      whos={whos}
    />
  )
}

render(
  <Parent whos={['world', 'though', 'ly', 'tual', 'issey']} simple={true} />,
)

const styles = {
  list: { textAlign: 'left' },
  odd: { color: 'grey' },
  even: { color: 'cornflowerblue' },
}
