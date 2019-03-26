const Parent = ({ whos, simple }) =>
  simple ? (
    <SimpleList whos={whos} />
  ) : (
    <Wrapper
      renderOdd={who => <li style={styles.odd}>{'Odd ' + who}</li>}
      renderEven={who => <li style={styles.even}>{'Even ' + who}</li>}
      whos={whos}
    />
  )

const SimpleList = ({ whos }) => (
  <ul>
    {whos.map(who => (
      <li>{who}</li>
    ))}
  </ul>
)

const Wrapper = ({ renderOdd, renderEven, whos }) => (
  <ul>
    {whos.map((who, index) => (index % 2 ? renderEven(who) : renderOdd(who)))}
  </ul>
)

render(
  <Parent whos={['world', 'though', 'ly', 'tual', 'issey']} simple={true} />,
)

const styles = {
  odd: { color: 'grey' },
  even: { color: 'cornflowerblue' },
}
