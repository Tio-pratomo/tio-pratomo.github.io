const hmr = () => {
    if (module.hot) {
        module.hot.accept();
    }
};

export { hmr };
