ALTER TABLE feedback_neuralnexus
DROP COLUMN id;

ALTER TABLE feedback_neuralnexus
ADD COLUMN id SERIAL PRIMARY KEY;
