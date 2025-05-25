"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function GalleryContent() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("Patios")

  useEffect(() => {
    // Check for tab parameter in URL
    const tab = searchParams.get('tab')
    if (tab && Object.keys(categories).includes(tab)) {
      setActiveTab(tab)
    }
    
    // Also check for hash fragment
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '')
      const decodedHash = decodeURIComponent(hash)
      if (decodedHash && Object.keys(categories).includes(decodedHash)) {
        setActiveTab(decodedHash)
      }
    }
  }, [searchParams])

  const categories = {
    "Patios": [
      { 
        image: "/images/charcoal_stamped_wood_plank_patio_curved_border_seat_wall_area_01.jpeg", 
        title: "Curved Border Patio", 
        description: "Stamped wood plank patio with curved border and seat wall area." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_patio_dark_border_large_expanse_01.jpeg", 
        title: "Large Patio Expanse", 
        description: "Wide view of stamped wood plank patio with dark border." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_patio_dark_border_large_expanse_02.jpeg", 
        title: "Large Patio Detail", 
        description: "Detailed view of large stamped wood plank patio with dark border." 
      },
      { 
        image: "/images/charcoal_stamped_ashlar_slate_patio_curved_section_dark_border_01.jpeg", 
        title: "Ashlar Slate Patio", 
        description: "Stamped ashlar slate patio with curved section and dark border." 
      },
      { 
        image: "/images/charcoal_broom_finish_patio_dark_curved_border_01.jpeg", 
        title: "Curved Border Patio", 
        description: "Broom finish patio with dark curved border." 
      },
      { 
        image: "/images/charcoal_broom_finish_patio_dark_curved_border_full_view_01.jpeg", 
        title: "Curved Border Overview", 
        description: "Full view of broom finish patio with dark curved border." 
      },
      { 
        image: "/images/charcoal_broom_finish_patio_smooth_border_house_side_01.jpeg", 
        title: "House Side Patio", 
        description: "Broom finish patio with smooth border on house side." 
      },
      { 
        image: "/images/grey_stamped_wood_plank_patio_dark_stone_border_fence_view_02.jpeg", 
        title: "Fence View Patio", 
        description: "Stamped wood plank patio with dark stone border near fence." 
      },
      { 
        image: "/images/tan_stamped_wood_plank_patio_dark_border_angle_view_01.jpeg", 
        title: "Tan Wood Plank Patio", 
        description: "Tan stamped wood plank patio with dark border, angled view." 
      },
      { 
        image: "/images/brown_stamped_wood_plank_patio_charcoal_stamped_stone_border_curved_garden_edge_01.jpeg", 
        title: "Garden Edge Patio", 
        description: "Brown stamped wood plank patio with charcoal stone border and curved garden edge." 
      },
      { 
        image: "/images/brown_stamped_wood_plank_patio_charcoal_stamped_stone_border_curved_garden_edge_02.jpeg", 
        title: "Garden Edge Detail", 
        description: "Detailed view of brown stamped wood plank patio with garden edge." 
      },
      { 
        image: "/images/brown_tan_concrete_patio_dark_stamped_border_curved_edge_01.jpeg", 
        title: "Curved Edge Patio", 
        description: "Brown-tan concrete patio with dark stamped border and curved edge." 
      },
      { 
        image: "/images/brown_tan_concrete_patio_dark_stamped_border_steps_01.jpeg", 
        title: "Patio with Steps", 
        description: "Brown-tan concrete patio with dark stamped border and steps." 
      },
      { 
        image: "/images/brown_stamped_flagstone_patio_dark_border_house_view_01.jpeg", 
        title: "House View Patio", 
        description: "Brown stamped flagstone patio with dark border, house view." 
      },
      { 
        image: "/images/tan_stamped_ashlar_slate_patio_dark_border_overview_02.jpeg", 
        title: "Ashlar Slate Overview", 
        description: "Overview of tan stamped ashlar slate patio with dark border." 
      },
      { 
        image: "/images/tan_stamped_ashlar_slate_patio_dark_stamped_border_01.jpeg", 
        title: "Ashlar Slate Border", 
        description: "Tan stamped ashlar slate patio with dark stamped border." 
      },
      { 
        image: "/images/brown_stamped_flagstone_patio_under_deck_dark_border_01.jpeg", 
        title: "Under Deck Flagstone Patio", 
        description: "Brown stamped flagstone patio with decorative border under deck." 
      },
      { 
        image: "/images/charcoal_stamped_ashlar_slate_patio_dark_border_under_deck_posts_01.jpeg", 
        title: "Under Deck Ashlar Slate", 
        description: "Charcoal stamped ashlar slate patio with decorative border under deck posts." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_ashlar_slate_patio_dark_border_house_view_01.jpeg", 
        title: "Mixed Pattern Patio", 
        description: "Charcoal stamped wood plank and ashlar slate patio with decorative border." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_circular_patio_compass_rose_inlay_01.jpeg", 
        title: "Circular Compass Rose Patio", 
        description: "Charcoal stamped wood plank circular patio with compass rose inlay." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_curved_patio_edge_or_wall_cap_angle_view_02.jpeg", 
        title: "Curved Edge Detail", 
        description: "Charcoal stamped wood plank patio with curved design edge detail." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_patio_compass_rose_inlay_closeup_yellow_markers_01.jpeg", 
        title: "Compass Rose Closeup", 
        description: "Close-up of charcoal stamped wood plank patio with compass rose inlay." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_patio_compass_rose_inlay_house_view_01.jpeg", 
        title: "Compass Rose House View", 
        description: "Charcoal stamped wood plank patio with compass rose inlay from house." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_patio_compass_rose_inlay_wet_look_yellow_markers_01.jpeg", 
        title: "Wet Look Compass Rose", 
        description: "Charcoal stamped wood plank patio with compass rose inlay, wet finish." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_patio_curved_border_house_side_view_01.jpeg", 
        title: "House Side Curved Border", 
        description: "Charcoal stamped wood plank patio with curved design and decorative border." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_patio_dark_border_angle_view_01.jpeg", 
        title: "Angled View Patio", 
        description: "Charcoal stamped wood plank patio with decorative border, angled perspective." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_patio_dark_border_under_deck_corner_01.jpeg", 
        title: "Under Deck Corner", 
        description: "Charcoal stamped wood plank patio with decorative border under deck corner." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_patio_dark_border_under_deck_overview_01.jpeg", 
        title: "Under Deck Overview", 
        description: "Overview of charcoal stamped wood plank patio with decorative border under deck." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_patio_under_deck_curved_border_01.jpeg", 
        title: "Under Deck Curved Design", 
        description: "Charcoal stamped wood plank patio with curved design and decorative border under deck." 
      },
      { 
        image: "/images/grey_brown_stamped_flagstone_patio_under_deck_dark_border_01.jpeg", 
        title: "Grey Brown Flagstone", 
        description: "Grey brown stamped flagstone patio with decorative border under deck." 
      },
      { 
        image: "/images/grey_brown_stamped_random_stone_patio_under_deck_dark_border_02.jpeg", 
        title: "Random Stone Under Deck", 
        description: "Grey brown stamped random stone patio with decorative border under deck." 
      },
      { 
        image: "/images/grey_stamped_ashlar_slate_patio_dark_border_wet_look_corner_view_01.jpeg", 
        title: "Wet Look Corner View", 
        description: "Grey stamped ashlar slate patio with decorative border, wet finish corner view." 
      },
      { 
        image: "/images/grey_stamped_ashlar_slate_patio_dark_border_wet_look_overview_01.jpeg", 
        title: "Wet Look Overview", 
        description: "Grey stamped ashlar slate patio with decorative border, wet finish overview." 
      },
      { 
        image: "/images/grey_stamped_ashlar_slate_patio_dark_border_wet_look_overview_02.jpeg", 
        title: "Wet Look Detail", 
        description: "Grey stamped ashlar slate patio with decorative border, wet finish detail." 
      },
      { 
        image: "/images/grey_stamped_ashlar_slate_patio_dark_border_wet_look_side_view_01.jpeg", 
        title: "Wet Look Side View", 
        description: "Grey stamped ashlar slate patio with decorative border, wet finish side view." 
      },
      { 
        image: "/images/grey_stamped_ashlar_slate_patio_under_deck_01.jpeg", 
        title: "Grey Ashlar Under Deck", 
        description: "Grey stamped ashlar slate patio under deck installation." 
      },
      { 
        image: "/images/grey_stamped_concrete_patio_under_deck_curved_border_stairs_01.jpeg", 
        title: "Under Deck with Stairs", 
        description: "Grey stamped concrete patio with curved design and decorative border under deck with stairs." 
      },
      { 
        image: "/images/grey_stamped_wood_plank_patio_compass_rose_inlay_red_white_closeup_01.jpeg", 
        title: "Red White Compass Rose", 
        description: "Grey stamped wood plank patio with red and white compass rose inlay closeup." 
      },
      { 
        image: "/images/light_grey_broom_finish_patio_new_pour_large_expanse_01.jpeg", 
        title: "Large Light Grey Patio", 
        description: "Light grey broom finish patio, fresh pour large expanse." 
      },
      { 
        image: "/images/light_grey_broom_finish_patio_saw_cuts_picture_frame_border_01.jpeg", 
        title: "Picture Frame Border", 
        description: "Light grey broom finish patio with saw cuts and picture frame border." 
      },
      { 
        image: "/images/light_grey_broom_finish_patio_saw_cuts_picture_frame_border_angle_view_01.jpeg", 
        title: "Picture Frame Angle View", 
        description: "Light grey broom finish patio with picture frame border, angled view." 
      },
      { 
        image: "/images/light_grey_broom_finish_patio_saw_cuts_picture_frame_border_house_view_01.jpeg", 
        title: "Picture Frame House View", 
        description: "Light grey broom finish patio with picture frame border from house." 
      },
      { 
        image: "/images/light_grey_concrete_compass_rose_inlay_blue_white_saw_cuts_closeup_01.jpeg", 
        title: "Blue White Compass Rose", 
        description: "Light grey concrete with blue and white compass rose inlay closeup." 
      },
      { 
        image: "/images/tan_broom_finish_patio_saw_cuts_dark_stamped_border_02.jpeg", 
        title: "Tan Broom Finish Detail", 
        description: "Tan broom finish patio with saw cuts and decorative stamped border." 
      },
      { 
        image: "/images/tan_broom_finish_patio_saw_cuts_dark_stamped_border_house_deck_view_01.jpeg", 
        title: "Deck View Tan Patio", 
        description: "Tan broom finish patio with decorative border viewed from deck." 
      },
      { 
        image: "/images/tan_broom_finish_patio_saw_cuts_dark_stamped_border_house_deck_view_02.jpeg", 
        title: "Deck View Detail", 
        description: "Tan broom finish patio with decorative border, deck view detail." 
      },
      { 
        image: "/images/tan_broom_finish_patio_saw_cuts_dark_stamped_border_house_deck_view_03.jpeg", 
        title: "Deck View Overview", 
        description: "Tan broom finish patio with decorative border, deck view overview." 
      },
      { 
        image: "/images/tan_stamped_ashlar_slate_patio_dark_border_under_deck_detail_01.jpeg", 
        title: "Under Deck Ashlar Detail", 
        description: "Tan stamped ashlar slate patio with decorative border under deck detail." 
      },
      { 
        image: "/images/tan_stamped_ashlar_slate_patio_dark_border_under_deck_overview_01.jpeg", 
        title: "Under Deck Ashlar Overview", 
        description: "Tan stamped ashlar slate patio with decorative border under deck overview." 
      },
      { 
        image: "/images/tan_stamped_flagstone_patio_under_deck_dark_border_02.jpeg", 
        title: "Tan Flagstone Under Deck", 
        description: "Tan stamped flagstone patio with decorative border under deck." 
      },
      { 
        image: "/images/tan_stamped_flagstone_patio_under_deck_dark_border_closeup_01.jpeg", 
        title: "Flagstone Closeup", 
        description: "Tan stamped flagstone patio with decorative border under deck closeup." 
      },
      { 
        image: "/images/tan_stamped_flagstone_patio_under_deck_wet_look_01.jpeg", 
        title: "Wet Look Flagstone", 
        description: "Tan stamped flagstone patio under deck with wet finish." 
      },
    ],
    "Fire Pits": [
      { 
        image: "/images/charcoal_stamped_wood_plank_circular_patio_fire_pit_seat_wall_02.jpeg", 
        title: "Circular Patio with Fire Pit", 
        description: "Beautiful circular stamped wood plank patio with integrated fire pit and seat wall." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_circular_patio_fire_pit_seat_wall_03.jpeg", 
        title: "Circular Patio Overview", 
        description: "Complete overview of circular stamped wood plank patio with fire pit." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_circular_patio_fire_pit_seat_wall_04.jpeg", 
        title: "Circular Patio Detail", 
        description: "Detailed view of circular stamped wood plank patio with seat wall." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_circular_patio_fire_pit_seat_wall_05.jpeg", 
        title: "Circular Patio Side View", 
        description: "Side view of circular stamped wood plank patio with fire pit." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_guitar_shape_patio_fire_pit_seat_wall_01_SIMILAR.jpeg", 
        title: "Guitar Shape Patio", 
        description: "Unique guitar-shaped stamped wood plank patio with fire pit and seat wall." 
      },
      { 
        image: "/images/dark_grey_stamped_wood_plank_patio_compass_rose_inlay_closeup_01.jpeg", 
        title: "Compass Rose Inlay", 
        description: "Close-up of dark grey stamped wood plank patio with compass rose inlay." 
      },
      { 
        image: "/images/dark_grey_stamped_wood_plank_patio_compass_rose_inlay_closeup_02.jpeg", 
        title: "Compass Rose Detail", 
        description: "Detailed view of compass rose inlay in stamped wood plank patio." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_guitar_shape_patio_fire_pit_house_view_02.jpeg", 
        title: "Guitar Shape House View", 
        description: "Charcoal stamped wood plank guitar-shaped patio with fire pit from house view." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_guitar_shape_patio_fire_pit_overview_01.jpeg", 
        title: "Guitar Shape Overview", 
        description: "Complete overview of charcoal stamped wood plank guitar-shaped patio with fire pit." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_guitar_shape_patio_fire_pit_shadow_visible_01.jpeg", 
        title: "Guitar Shape with Shadows", 
        description: "Charcoal stamped wood plank guitar-shaped patio with fire pit showing natural shadows." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_guitar_shape_patio_fire_pit_wide_angle_01.jpeg", 
        title: "Guitar Shape Wide Angle", 
        description: "Wide angle view of charcoal stamped wood plank guitar-shaped patio with fire pit." 
      },
      { 
        image: "/images/circular_stamped_concrete_patio_fire_pit_dark_border_new_construction_site_01.jpeg", 
        title: "New Construction Fire Pit", 
        description: "Circular stamped concrete patio with fire pit and decorative border at new construction site." 
      },
    ],
    "Steps & Walkways": [
      { 
        image: "/images/charcoal_stamped_ashlar_slate_curved_steps_front_door_01.jpeg", 
        title: "Front Door Steps", 
        description: "Stamped ashlar slate curved steps at front door." 
      },
      { 
        image: "/images/grey_concrete_steps_landing_front_entry_new_construction_zip_system_01.jpeg", 
        title: "Front Entry Steps", 
        description: "Grey concrete steps and landing for new construction front entry." 
      },
      { 
        image: "/images/grey_concrete_steps_landing_front_entry_new_construction_zip_system_02.jpeg", 
        title: "Front Entry Detail", 
        description: "Detailed view of new construction front entry steps and landing." 
      },
      { 
        image: "/images/tan_stamped_random_stone_concrete_steps_tiered_patio_01.jpeg", 
        title: "Tiered Patio Steps", 
        description: "Tan stamped random stone concrete steps with tiered patio." 
      },
      { 
        image: "/images/tan_stamped_random_stone_concrete_steps_01_SIMILAR.jpeg", 
        title: "Random Stone Steps", 
        description: "Tan stamped random stone concrete steps." 
      },
      { 
        image: "/images/grey_broom_finish_concrete_steps_front_door_01.jpeg", 
        title: "Front Door Steps", 
        description: "Grey broom finish concrete steps at front door." 
      },
      { 
        image: "/images/light_grey_broom_finish_patio_steps_new_pour_01.jpeg", 
        title: "New Patio Steps", 
        description: "Light grey broom finish patio steps, fresh pour." 
      },
      { 
        image: "/images/grey_stamped_random_stone_curved_patio_edge_detail_01.jpeg", 
        title: "Curved Patio Edge", 
        description: "Grey stamped random stone curved patio edge detail." 
      },
      { 
        image: "/images/grey_stamped_random_stone_circular_patio_fire_pit_walkway_access_01.jpeg", 
        title: "Circular Patio Access", 
        description: "Grey stamped random stone circular patio with fire pit and walkway access." 
      },
      { 
        image: "/images/grey_brown_stamped_random_stone_walkway_dark_border_steps_01.jpeg", 
        title: "Random Stone Walkway", 
        description: "Grey-brown stamped random stone walkway with dark border and steps." 
      },
      { 
        image: "/images/grey_brown_stamped_random_stone_walkway_to_fire_pit_patio_01.jpeg", 
        title: "Fire Pit Walkway", 
        description: "Grey-brown stamped random stone walkway leading to fire pit patio." 
      },
      { 
        image: "/images/light_grey_broom_finish_patio_walkway_new_pour_01.jpeg", 
        title: "New Patio Walkway", 
        description: "Light grey broom finish patio walkway, fresh pour." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_retaining_wall_by_deck_01.jpeg", 
        title: "Retaining Wall by Deck", 
        description: "Stamped wood plank retaining wall installation next to deck." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_retaining_wall_curved_top_01_LOW_QUALITY.jpeg", 
        title: "Curved Top Retaining Wall", 
        description: "Stamped wood plank retaining wall with curved top design." 
      },
      { 
        image: "/images/charcoal_stamped_ashlar_slate_walkway_dark_border_by_stairs_closeup_01.jpeg", 
        title: "Ashlar Slate Walkway Closeup", 
        description: "Charcoal stamped ashlar slate walkway with decorative border by stairs closeup." 
      },
      { 
        image: "/images/charcoal_stamped_ashlar_slate_walkway_dark_border_by_stairs_hose_visible_01.jpeg", 
        title: "Ashlar Slate by Stairs", 
        description: "Charcoal stamped ashlar slate walkway with decorative border by stairs." 
      },
      { 
        image: "/images/curved_stamped_concrete_steps_textured_stone_leading_to_patio_01.jpeg", 
        title: "Curved Steps to Patio", 
        description: "Curved stamped concrete steps with textured stone leading to patio." 
      },
      { 
        image: "/images/stamped_concrete_steps_textured_stone_broom_finish_patio_overview_01.jpeg", 
        title: "Textured Stone Steps", 
        description: "Stamped concrete steps with textured stone and broom finish patio overview." 
      },
      { 
        image: "/images/terracotta_concrete_walkway_grey_border_steps_construction_01.jpeg", 
        title: "Terracotta Walkway Construction", 
        description: "Terracotta concrete walkway with grey border steps during construction." 
      },
      { 
        image: "/images/terracotta_concrete_walkway_grey_border_steps_construction_02.jpeg", 
        title: "Terracotta Construction Detail", 
        description: "Terracotta concrete walkway with grey border steps construction detail." 
      },
      { 
        image: "/images/terracotta_concrete_walkway_grey_border_steps_front_entry_01.jpeg", 
        title: "Terracotta Front Entry", 
        description: "Terracotta concrete walkway with grey border steps at front entry." 
      },
    ],
    "Driveways": [
      { 
        image: "/images/grey_broom_finish_driveway_dark_border_large_house_01.jpeg", 
        title: "Large House Driveway", 
        description: "Grey broom finish driveway with dark border leading to large house." 
      },
      { 
        image: "/images/grey_broom_finish_driveway_apron_curved_edges_ac_unit_01.jpeg", 
        title: "Driveway Apron", 
        description: "Grey broom finish driveway apron with curved edges near AC unit." 
      },
      { 
        image: "/images/dark_grey_broom_finish_driveway_curved_approach_01.jpeg", 
        title: "Curved Approach", 
        description: "Dark grey broom finish driveway with curved approach." 
      },
      { 
        image: "/images/grey_broom_finish_driveway_dark_stamped_border_street_view_01.jpeg", 
        title: "Street View Driveway", 
        description: "Street view of grey broom finish driveway with stamped border." 
      },
      { 
        image: "/images/grey_broom_finish_driveway_extension_paver_border_02.jpeg", 
        title: "Driveway Extension", 
        description: "Grey broom finish driveway extension with paver border." 
      },
      { 
        image: "/images/grey_broom_finish_driveway_extension_paver_border_01_SIMILAR.jpeg", 
        title: "Extension Detail", 
        description: "Detailed view of driveway extension with paver border." 
      },
      { 
        image: "/images/grey_broom_finish_driveway_wide_view_caution_tape_01.jpeg", 
        title: "Wide View Driveway", 
        description: "Wide view of grey broom finish driveway with caution tape." 
      },
      { 
        image: "/images/grey_broom_finish_driveway_wide_view_caution_tape_worker_01.jpeg", 
        title: "Driveway Installation", 
        description: "Grey broom finish driveway installation with worker present." 
      },
      { 
        image: "/images/grey_broom_finish_driveway_long_view_caution_tape_01_POOR_rotated.jpeg", 
        title: "Long View Driveway", 
        description: "Long view of grey broom finish driveway with caution tape." 
      },
      { 
        image: "/images/brown_tan_concrete_driveway_apron_dark_stamped_border_01.jpeg", 
        title: "Driveway Apron", 
        description: "Brown-tan concrete driveway apron with dark stamped border." 
      },
      { 
        image: "/images/brown_tan_broom_finish_driveway_dark_stamped_border_01_POOR_rotated.jpeg", 
        title: "Brown-Tan Driveway", 
        description: "Brown-tan broom finish driveway with dark stamped border." 
      },
      { 
        image: "/images/tan_grey_broom_finish_driveway_saw_cuts_garage_view_01_LOW_QUALITY.jpeg", 
        title: "Garage View Driveway", 
        description: "Tan-grey broom finish driveway with saw cuts, garage view." 
      },
      { 
        image: "/images/tan_grey_broom_finish_driveway_saw_cuts_caution_tape_01.jpeg", 
        title: "Saw Cut Driveway", 
        description: "Tan-grey broom finish driveway with saw cuts and caution tape." 
      },
      { 
        image: "/images/tan_grey_broom_finish_driveway_saw_cuts_caution_tape_wide_view_01.jpeg", 
        title: "Wide View Driveway", 
        description: "Wide view of tan-grey broom finish driveway with saw cuts." 
      },
      { 
        image: "/images/grey_broom_finish_driveway_patio_fresh_pour_formed_edges_01.jpeg", 
        title: "Fresh Pour Driveway", 
        description: "Fresh pour of grey broom finish driveway with formed edges." 
      },
      { 
        image: "/images/grey_broom_finish_driveway_patio_fresh_pour_formed_edges_02.jpeg", 
        title: "Fresh Pour Detail", 
        description: "Detailed view of fresh pour driveway with formed edges." 
      },
      { 
        image: "/images/charcoal_stamped_wood_plank_driveway_or_patio_large_expanse_01.jpeg", 
        title: "Large Stamped Expanse", 
        description: "Charcoal stamped wood plank driveway or patio large expanse installation." 
      },
      { 
        image: "/images/grey_broom_finish_driveway_caution_tape_street_approach_01.jpeg", 
        title: "Street Approach", 
        description: "Grey broom finish driveway with caution tape during street approach construction." 
      },
      { 
        image: "/images/grey_broom_finish_driveway_caution_tape_street_approach_02.jpeg", 
        title: "Street Approach Detail", 
        description: "Grey broom finish driveway street approach construction detail." 
      },
      { 
        image: "/images/grey_broom_finish_driveway_fresh_pour_caution_tape_01.jpeg", 
        title: "Fresh Pour Installation", 
        description: "Grey broom finish driveway fresh pour with caution tape." 
      },
      { 
        image: "/images/tan_grey_broom_finish_driveway_saw_cuts_caution_tape_street_view_01.jpeg", 
        title: "Street View Saw Cuts", 
        description: "Tan grey broom finish driveway with saw cuts and caution tape from street view." 
      },
    ],
    "Pool Decks": [
      { 
        image: "/images/grey_broom_finish_pool_deck_pergola_01.jpeg", 
        title: "Pool Deck with Pergola", 
        description: "Professional broom finish pool deck with pergola." 
      },
      { 
        image: "/images/grey_broom_finish_pool_deck_pergola_02.jpeg", 
        title: "Pool Deck Overview", 
        description: "Complete overview of broom finish pool deck with pergola." 
      },
    ],
    "Floors & Foundations": [
      { 
        image: "/images/grey_concrete_slab_floor_basement_or_garage_unfinished_view_02.jpeg", 
        title: "Basement/Garage Floor", 
        description: "Clean grey concrete slab floor for basement or garage." 
      },
      { 
        image: "/images/grey_concrete_garage_floor_fresh_pour_saw_cuts_01.jpeg", 
        title: "Fresh Garage Floor", 
        description: "New grey concrete garage floor with saw cuts." 
      },
      { 
        image: "/images/grey_concrete_garage_floor_fresh_pour_saw_cuts_02.jpeg", 
        title: "Garage Floor Detail", 
        description: "Detailed view of fresh grey concrete garage floor with saw cuts." 
      },
      { 
        image: "/images/grey_broom_finish_patio_large_slab_new_pour_chainlink_fence_01.jpeg", 
        title: "Large Patio Slab", 
        description: "Large grey broom finish patio slab with chainlink fence." 
      },
      { 
        image: "/images/tan_broom_finish_patio_stamped_border_garage_side_01.jpeg", 
        title: "Garage Side Patio", 
        description: "Tan broom finish patio with stamped border on garage side." 
      },
    ],
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-display-lg font-bold mb-6 sm:text-display-xl">Our Gallery</h1>
          <p className="text-body-xl text-gray-600">
            Explore our collection of concrete work, from beautiful patios to functional garage floors.
            Each project showcases our commitment to quality and craftsmanship.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 h-auto p-2 bg-muted">
            {Object.keys(categories).map((category) => (
              <TabsTrigger key={category} value={category} className="text-body-sm sm:text-body-md whitespace-nowrap px-3 py-2 flex-shrink-0">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(categories).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-64 w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-heading-md">{item.title}</CardTitle>
                      <CardDescription className="text-body-md">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button asChild className="w-full" variant="outline">
                        <Link href={`/contact?project=${encodeURIComponent(category)}&title=${encodeURIComponent(item.title)}&description=${encodeURIComponent(item.description)}`}>
                          Request Similar Project
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  )
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GalleryContent />
    </Suspense>
  )
}
