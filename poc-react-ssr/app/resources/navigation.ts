const navigate = (to: string) => {
    const { host } = window.location;
    window.location.href = `${host}${to}`
};

export default navigate;
