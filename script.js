function toggleSection(sectionId) {
    var sections = ["about", "contact"]; 

    sections.forEach(function(id) {
        var section = document.getElementById(id);
        if (id === sectionId) {
            
            section.style.display = (section.style.display === "block") ? "none" : "block";
        } else {
            
            section.style.display = "none";
        }
    });
}
