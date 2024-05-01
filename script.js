// let bib_style = "apa";
// let bib_style = "chicago";
let bib_style = "apa";
// let bib_style = "harvard";

const references = new Cite(library);
const references_as_text = references.format("bibliography", {
  template: bib_style,
  format: "text"
});

const references_as_html = references.format("bibliography", {
  template: bib_style,
  format: "html"
});

console.log(`text: ${references_as_text}`);
console.log(`html: ${references_as_html}`);


const citations = document.querySelectorAll('cite');
console.log(citations)
citations.forEach(el => {
  const reflist = el
    .getAttribute('data-reflist')
    .split(",");
  console.log(`reflist: ${reflist}`);

  const citation_lib = reflist.map(_ => library.filter(x => x.id == _));
  console.log(`citation_lib: ${citation_lib}`);

  const citation_list = new Cite(citation_lib);
  console.log(citation_list.data);

  el.innerHTML = citation_list.format("citation", {
    template: bib_style,
    format: "html"
  });
});

document.getElementById('references-list').innerHTML = references_as_html;