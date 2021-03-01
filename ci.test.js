var fs = require('fs'); 

describe('CI sequence', () => {

  var fileContents;
  beforeEach(() => {
    fileContents = fs.readFileSync('ci.md', 'utf8');
  });

  it('the list has a header', () => {
    expect(/.*#.*/ig.test(fileContents)).toBe(true);
  });

  // TODO add the tests between these comments =>
  
  it('5. Merge/rebase commits from master. Make tests pass on the merge result.', () => {
    expect(/.*merge.*commits.*tests\s+pass.*/ig.test(fileContents)).toBe(true);
  });

  it('6. Deploy from the feature branch to production.', () => {
    expect(/.*Deploy.*to\s+production.*/ig.test(fileContents)).toBe(true);
  });

  it('7. If everything is good in production for some period of time, merge changes to master.', () => {
    expect(/.*merge.*to\s+master.*/ig.test(fileContents)).toBe(true);
  });

  // TODO <= add the tests between these comments

});
