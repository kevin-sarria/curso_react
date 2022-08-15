
import PropTypes from 'prop-types';

export default function FirstApp( { title, subTitle, name } ) {


    return (
    <>
        <h1 data-testid="test-title">{ title }</h1>
        <p>{ subTitle }</p>
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
  );
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subTitle: 'No hay subtítulo',
    name: 'Kevin Sarria'
}

