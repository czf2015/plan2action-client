const styles = {
    disabled: false,
    loading: true,
    primary: 'primary'
}

function filter({disabled = false, loading = true, primary = 'primary'} = {}) {
    console.log(styles.disabled)
    console.log(styles[primary])
    console.log(styles.loading)
}

filter()