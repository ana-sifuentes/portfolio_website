const sectionIds = {
    Epidemia: '#epidemic-section',
    Causas: '#causes-section',
    Ultraprocessados: '#ultraprocessed-section',
    Resultados: '#results-section',
    Políticas: '#policies-section',
    Créditos: '#credits-section',
};

$('#navigation-menu').fadeIn();

const scrollScreenById = (id) => {
    const scrollDiv = d3.select(id).node().offsetTop;
    window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
};

const moveToSection = (e) => {
    const sectionName = d3.select(e.target.parentNode).select('span').text();
    scrollScreenById(sectionIds[sectionName]);
};

const updateCurrentSection = () => {
    const windowPosition = window.scrollY;
    const showNavPosition = d3.select('#epidemic-section').node().offsetTop;

    windowPosition >= showNavPosition
        ? d3.select('#navigation-menu').style('opacity', 1)
        : d3.select('#navigation-menu').style('opacity', 0);

    Object.values(sectionIds).forEach((section, i) => {
        const sectionStart = d3.select(section).node().offsetTop;
        const sectionEnd =
            d3.select(section).node().offsetTop +
            d3.select(section).node().getBoundingClientRect().height;

        if (windowPosition >= sectionStart && windowPosition < sectionEnd) {
            d3.selectAll('#navigation-menu li').classed(
                'current-section',
                false,
            );

            d3.select(d3.selectAll('#navigation-menu li').nodes()[i]).classed(
                'current-section',
                true,
            );
        }
    });
};

d3.selectAll('#navigation-menu li').on('click', moveToSection);
d3.select(window).on('scroll', updateCurrentSection);
