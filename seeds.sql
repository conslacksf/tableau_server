CREATE TABLE public.bdm_notes
    (
    id VARCHAR(18)
    , bdm VARCHAR
    , sbdm VARCHAR
    , about VARCHAR
    , founder_name_1 VARCHAR
    , founder_name_2 VARCHAR
    , founder_name_3 VARCHAR
    , founder_name_4 VARCHAR
    , female_founder VARCHAR
    , inbound_email VARCHAR
    , one_liner VARCHAR
    , goal_1_year_end_proj VARCHAR
    , goal_2_year_end_proj VARCHAR
    , bdm_last_outreach VARCHAR
    , bdm_next_outreach VARCHAR
    , action_items VARCHAR
    , action_items_notes VARCHAR
    )
;

SELECT * FROM public.bdm_notes