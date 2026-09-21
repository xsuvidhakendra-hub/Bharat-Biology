/** Real, cited ossification/fusion ages for the "Growth" mode (baby → adult skeleton).
 *
 * BodyParts3D ships a single already-fused adult skeleton — there is no separate infant
 * mesh, and this project has no budget to commission one (see Rules.md §3, §2 of
 * BIO-20260921-0900's demand). Every figure below is a real, cited age range, not an
 * invented one; parts with no citable per-bone source here are left out entirely rather
 * than assigned a guessed age. Where the source geometry has no separate mesh boundary for
 * the ossification centers described (sacrum's 5 segments, the hip bone's ilium/ischium/
 * pubis, the sternum's manubrium/body/xiphoid), the whole existing mesh is treated as one
 * fusing unit and shown with a cartilage-tint indicator rather than split geometry that
 * does not exist in the dataset. Only the cranial vault bones are genuinely separate
 * meshes in the source data, so only those get a real spatial (fontanelle/suture) gap.
 *
 * Sources (full citations also in Rules.md §3):
 * - Cranial fontanelle/suture ages: CARTA, carta.anthropogeny.org/moca/topics/age-fontanelles-cranial-sutures-closure
 * - Long-bone epiphyses: PMC11122822, pmc.ncbi.nlm.nih.gov/articles/PMC11122822/
 * - Hip bone (triradiate cartilage): J Korean Soc Radiol, DOI 10.3348/jksr.2019.80.3.503
 * - Sacrum: PubMed 24227049
 * - Sternum: PMC12518889
 * - ~270 bones at birth -> 206 adult, mechanism: Cleveland Clinic + OpenStax A&P 2e
 */

/** Cranial vault bones: real, separate meshes in the source atlas. These get a spatial
 * gap (open fontanelle/suture) that closes as growth passes `closesByYears`. */
export const CRANIAL_VAULT: Record<string, {closesByYears: number; label: string}> = {
 'frontal bone': {closesByYears: 5, label: 'Metopic + coronal suture region'},
 'left parietal bone': {closesByYears: 5, label: 'Sagittal + coronal suture region'},
 'right parietal bone': {closesByYears: 5, label: 'Sagittal + coronal suture region'},
 'left temporal bone': {closesByYears: 1.5, label: 'Mastoid fontanelle region'},
 'right temporal bone': {closesByYears: 1.5, label: 'Mastoid fontanelle region'},
 'occipital bone': {closesByYears: 0.25, label: 'Posterior fontanelle'},
 'sphenoid bone': {closesByYears: 0.5, label: 'Sphenoidal fontanelle region'},
 'ethmoid': {closesByYears: 5, label: 'Anterior cranial suture region'},
};

/** Bones the source atlas ships as one already-fused adult mesh. No spatial split is
 * possible without new geometry (out of scope, no budget) — these get a cartilage-tint
 * indicator only, fading out as growth passes `fusesByYears`. Range midpoint used where
 * sources cite a range; see Rules.md §3 for the full range and the male/female split. */
export const FUSING_UNITS: Record<string, {fusesByYears: number; label: string}> = {
 'left femur': {fusesByYears: 18, label: 'Distal femoral epiphysis'},
 'right femur': {fusesByYears: 18, label: 'Distal femoral epiphysis'},
 'left tibia': {fusesByYears: 17.5, label: 'Proximal/distal tibial epiphyses'},
 'right tibia': {fusesByYears: 17.5, label: 'Proximal/distal tibial epiphyses'},
 'left fibula': {fusesByYears: 17.5, label: 'Fibular epiphyses'},
 'right fibula': {fusesByYears: 17.5, label: 'Fibular epiphyses'},
 'left humerus': {fusesByYears: 16, label: 'Proximal/distal humeral epiphyses'},
 'right humerus': {fusesByYears: 16, label: 'Proximal/distal humeral epiphyses'},
 'left radius': {fusesByYears: 16, label: 'Radial epiphyses'},
 'right radius': {fusesByYears: 16, label: 'Radial epiphyses'},
 'left ulna': {fusesByYears: 16, label: 'Ulnar epiphyses'},
 'right ulna': {fusesByYears: 16, label: 'Ulnar epiphyses'},
 'left hip bone': {fusesByYears: 15, label: 'Triradiate cartilage (ilium/ischium/pubis)'},
 'right hip bone': {fusesByYears: 15, label: 'Triradiate cartilage (ilium/ischium/pubis)'},
 'sacrum': {fusesByYears: 25, label: '5 sacral segments (S1–S2 fuse last)'},
 'body of sternum': {fusesByYears: 19, label: 'Manubriosternal / xiphisternal union'},
 'left clavicle': {fusesByYears: 25, label: 'Medial (sternal) epiphysis'},
 'right clavicle': {fusesByYears: 25, label: 'Medial (sternal) epiphysis'},
};

export function cranialVaultInfo(name: string) {
 return CRANIAL_VAULT[name.toLowerCase()];
}
export function fusingUnitInfo(name: string) {
 return FUSING_UNITS[name.toLowerCase()];
}
/** 0 = still forming (birth), 1 = fully fused/ossified, for any tagged bone; untagged
 * bones return 1 always (no citable data — shown as already formed throughout). */
export function fusionProgress(name: string, ageYears: number): number {
 const cranial = cranialVaultInfo(name);
 if (cranial) return Math.min(1, ageYears / cranial.closesByYears);
 const unit = fusingUnitInfo(name);
 if (unit) return Math.min(1, ageYears / unit.fusesByYears);
 return 1;
}
export const MAX_GROWTH_YEARS = 25;
