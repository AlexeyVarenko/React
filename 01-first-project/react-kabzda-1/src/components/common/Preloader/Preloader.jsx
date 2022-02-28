import preloader from '../../../assets/images/loader.gif'

let Preloader = (props) => {
    return <div style={{ backgroundColor: 'red' }}>
        <img src={preloader} style={{ width: 100 }} />
    </div>
}

export default Preloader