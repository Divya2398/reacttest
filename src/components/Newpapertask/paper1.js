import React from "react";
import "./newspaper.css";

const Paper = () => {
  return (
    <div class="container mt-3 mx-auto w-75 border border-white" id="container">
      <header>
        <div class="row text-center mx-3 ">
          <div class="col-md-12">
            <p class="text-end mt-4">African Journal of Agriculture Research</p>
            <h3 class="text-center mb-4">
              Exploring in vivo cholesterol-mediated interactions between
              <br />
              activated EGF receptors in plasma membrane with
              <br />
              single-molecule optical tracking
            </h3>

            <h4 class="text-center text-secondary mb-3">
              Chien Y.Lin <sup>1</sup>, Jung Y. Huang<sup>2</sup> Leu-Wei Lo
              <sup>3</sup>
            </h4>

            <p class="text-secondary">
              <sup>1.</sup>Department of Photonics, Chiao Tung University, 1001
              Ta-Hsueh Road, Hsinchu, Taiwan
            </p>
            <p class="text-secondary">
              <sup>2.</sup> The T.K.P. Research Center for Photonics, Chiao Tung
              University, 1001 Ta-Hsueh Road, Hsinchu, Taiwan
            </p>
            <p class="text-secondary">
              <sup>3.</sup>Institute of Biomedical Engineering and Nanomedicine,
              National Health Research Institutes, 35, Keyan Road, Zhunan,
              Taiwan
            </p>
          </div>
        </div>
        <hr class="mx-4" />
        <div class="row mx-3 " id="main">
          <div class="col-md-12">
            <p>
              Background: The first step in many cellular signaling processes
              occurs at various types of receptors in the plasma membrane.
              Membrane cholesterol can alter these signaling pathways of living
              cells. However, the process in which the interaction of activated
              receptors is modulated by cholesterol remains unclear.
            </p>
            <p>
              Results We discovered that unliganded epidermal growth factor
              receptors may reside nearby cholesterol-riched regions of the
              plasma membrane and can move into these lipid domains when
              subjected to ligand binding. The amount of membrane cholesterol
              considerably affects the stability of correlated motion of
              activated epidermal growth factor receptors.
            </p>
            <p>
              Conclusions Our results provide single-molecule evidence of
              membrane cholesterol in regulating signaling receptors. Because
              the three cell lines used for this study are quite diverse, our
              results may be useful to shed light on the mechanism of
              cholesterol-mediated interaction between activated receptors in
              live cells.
            </p>
          </div>
        </div>
      </header>
      <hr class="mx-4" />
      <div class="row mx-4 pb-3" id="text">
        <div class="col-md-6  px-4 pt-2">
          <h4>Background</h4>
          <p>
            Receptor proteins are ubiquitous in the plasma membrane of mammalian
            cells, which transduce information about cellular environment to
            intracellular signaling networks [1-3]. There are approximately 1352
            receptor proteins coded by human genome [4]. The flow of information
            through those receptors is critically shaped by receptor
            interactions. The diverse cellular processes regulated by such
            receptor proteins include cell growth and division, differentiation,
            migration, and apoptosis [5].
          </p>
        </div>
        <div class="col-md-6 px-4 pt-2">
          <p>
            Receptor signaling dysregulation is attributed to the pathogenesis
            of several diseases [6, 7]. Therefore, understanding the
            interactions, molecular processes and relevant structures of such
            signaling receptors is imperative. Human receptor proteins,
            including the epidermal growth factor receptor (EGFR), share a
            common molecular architecture, consisting of an extracellular
            binding domain, a single transmembrane helix, a flexible
            juxtamembrane segment, and an intracellular tyrosine kinase domain
            [8].Ligand binding to the extracellular domains induces
            conformational reorganization that checks condition of three state ,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Paper;
