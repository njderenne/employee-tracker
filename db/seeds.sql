INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Finance'),
    ('Legal'),
    ('Engineering');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Sales Lead', 40000, 1),
    ('Sales Associate', 25000, 1),
    ('Phone Operator', 30000, 1),
    ('Banker', 50000, 2),
    ('Accountant', 65000, 2),
    ('Loan Specialist', 70000, 2),
    ('Lawyer', 190000, 3),
    ('Legal Team Lead', 250000, 3),
    ('Paralegal', 35000, 3),
    ('Software Engineer', 120000, 4),
    ('Electrical Engineer', 80000, 4),
    ('Computer Vision Engineer', 95000, 4);

-- INSERT INTO manager (first_name, last_name)
-- VALUES
--     ('Vitorio', 'DeSica'),
--     ('Wilkie', 'Collins'),
--     ('Elizabeth', 'Gaskell'),
--     ('George', 'Sand'),
--     ('Vernon', 'Lee'),
--     ('Arthur', 'Machen'),
--     ('Frederick', 'Marryat'),
--     ('Harriet', 'Martineau'),
--     ('George', 'Meredith'),
--     ('Margaret', 'Oliphant'),
--     ('Anthony', 'Trollope'),
--     ('Charlotte', 'Yonge');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Ronald', 'Firbank', 1, 4),
    ('Virginia', 'Woolf', 1, 4),
    ('Piers', 'Gaveston', 1, 4),
    ('Vitorio', 'DeSica', 1, null),
    ('Charles', 'LeRio', 2, 8),
    ('Katherine', 'Mansfield', 2, 8),
    ('Dora', 'Carrington', 2, 8),
    ('Wilkie', 'Collins', 2, null),
    ('Edward', 'Bellamy', 3, 12),
    ('Montague', 'Summers', 3, 12),
    ('Octavia', 'Butler', 3, 12),
    ('Elizabeth', 'Gaskell', 3, null),
    ('Unica', 'Zurn', 4, 16),
    ('James', 'Fraser', 4, 16),
    ('Jack', 'London', 4, 16),
    ('George', 'Sand', 4, null),
    ('Robert', 'Bruce', 5, 20),
    ('Peter', 'Greenaway', 5, 20),
    ('Derek', 'Jarman', 5, 20),
    ('Vernon', 'Lee', 5, null),
    ('Paolo', 'Pasolini', 6, 24),
    ('Heathcote', 'Williams', 6, 24),
    ('Sandy', 'Powell', 6, 24),
    ('Arthur', 'Machen', 6, null),
    ('Emil', 'Zola', 7, 28),
    ('Sissy', 'Coalpits', 7, 28),
    ('Antoinette', 'Capet', 7, 28),
    ('Frederick', 'Marryat', 7, null),
    ('Samuel', 'Delany', 8, 32),
    ('Tony', 'Duvert', 8, 32),
    ('Dennis', 'Cooper', 8, 32),
    ('Harriet', 'Martineau', 8, null),
    ('Monica', 'Bellucci', 9, 36),
    ('John', 'Dryden', 9, 36),
    ('Alexander', 'Pope', 9, 36),
    ('George', 'Meredith', 9, null),
    ('Lionel', 'Johnson', 10, 40),
    ('Aubrey', 'Beardsley', 10, 40),
    ('Tulse', 'Luper', 10, 40),
    ('Margaret', 'Oliphant', 10, null),
    ('William', 'Morris', 11, 44),
    ('George', 'Shaw', 11, 44),
    ('Arnold', 'Bennett', 11, 44),
    ('Anthony', 'Trollope', 11, null),
    ('Algernon', 'Blackwood', 12, 48),
    ('Rhoda', 'Broughton', 12, 48),
    ('Hart', 'Crane', 12, 48),
    ('Charlotte', 'Yonge', 12, null);