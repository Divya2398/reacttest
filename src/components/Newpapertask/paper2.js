import React from "react";
import "./newspaper.css";

const Paper1 = () => {
  return (
    <div class="container mt-3 mx-auto w-75 border border-white" id="container">
      <p class="mt-4 text-end mx-5">
        2 &emsp; &nbsp; African Journal of Agriculture Research
      </p>
      <div class="row mx-4 pb-4" id="text">
        <div class="col-md-6  px-4 pt-2">
          <p>
            However, conclusions about the mechanism of ligand-induced dynamic
            recruitment and dimerization of membrane-associated receptors
            remains controversial [9]. Conventional steady-state ensemble
            approaches cannot be used to address the stochastic nature of
            activated receptors that encounter each other in a highly
            heterogeneous and fluidic plasma membrane. Recent advancements in
            single-molecule fluorescent imaging and tracking have provided
            further insights into the behavior of EGFR in vivo [10-12]. For
            example, Lidke et al. devised a two-color quantum-dot tracking
            method to visualize the state-dependent dimerization processes of
            human EGFR in living cells [13]. A hidden Markov model was used to
            extract the kinetic parameters of the underlying free, co-confined,
            and dimerized states.
          </p>
          <p>
            Researchers have increasingly determined that lipid domains rich in
            glycosphingolipids and cholesterol can facilitate signaling
            receptors to form a dimer [13-15]. Because the recruitment mechanism
            and dynamic clustering of receptors in the hierarchical structure of
            plasma membranes are not clearly understood, the existence and
            functionality of lipid nanoscale domains on EGFR dimerization
            remains controversial. A growing body of research indicates that
            membrane cholesterol can influence the organization, stability, and
            function of membrane proteins including receptors [16-18]. The
            process by which this cholesterol modulates membrane proteins
            remains unclear. The plasma membranes of live cells are complex and
            highly heterogeneous. Single-molecule tracking had been successfully
            used to probe the microscopic environments and fluctuations faced by
            receptor proteins in a living cell [13, 19, 20]. As a receptor
            protein diffuses in the plasma membrane, it encounters two types of
            interactions with its local environment [9, 21].
          </p>
        </div>
        <div class="col-md-6  px-4 pt-2">
          <p>
            receptor protein can induce a local ordering of the surrounding
            lipid molecules via a lipid-protein interaction. Furthermore,
            confinement by actin filaments can also be involved. We developed an
            energetic model to describe the dynamic diffusion of a
            membrane-associated protein in a hierarchical structure of actin
            corrals and lipid domains [22]. This model enables us to identify
            critical information from single-molecule trajectories.
            Specifically, the confinement influences on EGFRs can be revealed by
            analyzing the normalized variance of mean square of diffusion step
            size of receptor proteins in live HeLa cells [20, 22]. In ref. [20],
            we focused on the influence of lipid domains on the diffusion of
            EGFRs. However, affinity of liganded EGFR for lipid domains and
            requirement of membrane cholesterol have not been verified on
            different cell lines. In this study, we employed single-molecule
            tracking technique to address the problem associated with the effect
            of membrane cholesterol on receptor-receptor interaction in vivo.
            Please note that those data are spatially and temporally
            coarse-grained from sampling of real molecule motions. The diffusion
            coefficient deduced from the coarse-grained trajectories can be
            location-dependent, reflecting the influences from local barriers
            [23].
          </p>
          <h4>Methods</h4>
          <p>
            EGFRs were labeled to display their diffusive motions in the plasma
            membranes of live cells. An anti-EGFR antibody-quantum dot complex
            was synthesized for attaching specifically on unliganded EGFRs as a
            fluorescent tag. To label liganded EGFRs, we used fluorescent
            epidermal growth factors (EGF) to activate EGFRs and tag them at the
            same time. A schematic diagram of native and liganded EGFRs in the
            environment of plasma membrane is described.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Paper1;
