(ns ^:figwheel-always prais2.faqs
    (:require [rum.core :as rum]
              [clojure.string :as str]
              [prais2.chrome :as chrome]
              [prais2.content :as content :refer [faqs]]))


(defn faq-content [faq-key]
  (let [faq (faq-key faqs)
        faq-name (name faq-key)
        faq-number (str/replace faq-name #"\D" "")]
    [:div {:id faq-name}
     [:h2
      (str "Q" faq-number ": " (:title faq))]
     [:.well
      (:body faq)
      ]]))

(rum/defc faq-item [faq]
  (faq-content faq)
)


(rum/defc render-faqs [section-id]
  [:.container
   [:.row
    [:#faqs

     [:h1
       "Generic FAQs about the chart"]

     [:.well.faqs
      [:h3 "Terminology"]
      [:dl
       [:dt "Survival rate"]
       [:dd "The percentage of operations where the child survived at least 30 days after their operation."]]
      [:dt "Chance factors"]
      [:dd "It is impossible to predict precisely what is going to happen in an individual operation. This is partly due to the inevitable inability to predict the future with certainty – all people are physically unique and will react slightly differently to medicines, anaesthetic, surgery and no heart problem is exactly the same as another. Our inability to predict precisely is also partly because there are factors that we suspect may influence the outcome but cannot be included in the statistical method either because these factors are difficult to define or no routine data on them is collected. Together, we call these all “chance factors”."]]

     [:.two-col
      [:h2#section]
      [:.no-break
       [:h2#q1.-why-do-some-children-need-heart-surgery
        "Q1. Why do some children need heart surgery?"]
       [:.well
        [:p
         "Each year in the UK, about 7000 babies are born with a heart defect (called congenital heart disease). Congenital heart disease covers a wide range of problems from the relatively minor (such as a small hole in the heart) to more severe conditions where a child needs specialist hospital care. About half of all children born with a heart defect will need heart surgery at some stage in their childhood. Children can also develop problems with their heart as they grow up (for instance, through an infection) and also require hospital care (called acquired heart disease)."]]]

      [:.no-break
       [:h2#q2.-why-are-survival-rates-monitored-and-published
        "Q2. Why are survival rates monitored and published? "]
       [:.well
        [:p
         "In the 1990s, there were found to be problems with the standard of care for children having heart surgery at the Bristol Royal Infirmary with the proportion of children who died after surgery at Bristol being much higher than in other UK hospitals. The formal inquiry into the what happened ("
         [:a
          {:href "http://webarchive.nationalarchives.gov.uk/20090811143745/http:/www.bristol-inquiry.org.uk/final_report/the_report.pdf"}
          "The Bristol Inquiry 2001"]
         ") led to a number of changes, including a new compulsory national reporting system so that the proportion of children surviving to 30 days after surgery for all hospitals were published every year. Results that appear unusual compared to the rest of the UK are then checked further by the national audit body (NICOR)."]
        [:p
         "Until 2013, NICOR only published survival rates for certain types of procedure because there was not a good way of putting overall survival rates into context (see above). But recent "
         [:a
          {:href "https://www.ucl.ac.uk/operational-research/AnalysisTools/PRAiS"}
          "research "]
         "has made this possible, and since 2013 NICOR has been publishing overall survival rates along with the “predicted range” for survival using the statistical model (see above). The calculation of the predicted range uses the same statistical method for all hospitals and is calculated without knowing what the survival rate at a hospital actually was."]
        [:p
         "The UK now has one of the strongest monitoring programmes in the world. Also,since reporting started, "
         [:a
          {:href "http://www.bbc.co.uk/news/health-32162803"}
          "survival rates have been improving"]
         " and now "
         [:strong
          "over"]
         [:strong
          "97% of children survive to at least one month after surgery"]
         "."]]]

      [:.no-break
       [:h2#q3.-what-does-the-national-audit-body-do
        "Q3. What does the national audit body do? "]
       [:.well
        [:p
         [:a
          {:href "http://www.ucl.ac.uk/nicorum/patients"}
          "NICOR "]
         "(The National Institute for Cardiovascular Outcomes Research) collects data and produces analysis to enable hospitals and healthcare improvement bodies to monitor and improve the quality of care and outcomes of children who need heart surgery. Data on every surgery or intervention performed on a child for heart problems is submitted to NICOR every 3 months, and each hospital undergoes independent checks of the quality of their submitted data."]
        [:p
         "NICOR tracks the survival of these children by linking to the national register of deaths using NHS number and also from hospital records. Each year, NICOR publishes a report of survival over the previous 3 years for each hospital in the UK and Ireland. It reports the proportion of children surviving for about 40 common surgical procedures and, since 2013, also overall survival for each hospital."]
        [:p
         "If a hospital’s survival outcomes are below a certain threshold, NICOR and the hospital together examine the data and the individual cases to understand whether any further action needs to be taken. In extreme cases, a hospital might stop doing surgery while action is taken to improve the service. You can read more this process on "
         [:a
          {:href "https://nicor4.nicor.org.uk/CHD/an_paeds.nsf/vwContent/Information%20for%20Patients?Opendocument"}
          "NICOR’s patient information pages"]
         " and in our FAQ section. In this website, we explain how survival statistics are used to support this decision making."]]]

      [:.no-break
       [:h2#q4.-why-is-a-different-survival-range-predicted-for-each-hospital
        "Q4. Why is a different survival range predicted for each hospital? "]
       [:.well
        [:p
         "The outcomes of surgery can vary from one hospital to another for a number of reasons. One important reason is chance factors that affect outcomes that have nothing to do with the standard of care that is offered by a hospital and cause a hospital to have more or fewer survivors than predicted from the statistical method. This does NOT mean that we have observed a genuine difference. For example, we might observe that Hospital A has more survivors than predicted this year. If this is due to chance factors, then, next year, it is just as likely that A has fewer survivors than predicted."]
        [:p
         "If a hospital’s results are inside its range then this means that the actual survival is in line with what is predicted, given the complexity and number of surgeries that the hospital performed in that time period. Comparing only to each hospital’s predicted range helps to ensure that we do not draw unjustified conclusions about small differences between observe and predicted survival or between one hospital’s survival rate and another hospital’s survival rate."]]]

      [:.no-break
       [:h2#q5.-why-do-the-hospitals-that-do-more-operations-have-narrower-ranges
        "Q5. Why do the hospitals that do more operations have narrower ranges? "]
       [:.well
        [:p
         "If a hospital does not carry out many operations, then chance factors can have a large impact on their overall survival rate, and so we need to allow more leeway between observed and predicted survival in order to rule out the influence of chance factors. The ranges get narrower as the hospitals do more operations."]]]

      [:.no-break
       [:h2#q6.-what-does-it-mean-if-a-hospital-falls-outside-its-range
        "Q6. What does it mean if a hospital falls "
        [:em
         "outside"]
        " its range? "]
       [:.well
        [:p
         "This is a difficult question and so the answer is a bit long!"]
        [:p
         "Firstly, the size of the range and the position of each hospital’s dot depends on assuming that the statistical method and the data used to apply it are both perfect. They are in fact not perfect (but as good as we can currently get them) and so, in a way, the predicted range is just our best estimate of where each hospital’s survival rate would be."]
        [:p
         "So, a single hospital falling outside its range is “unexpected” and the national audit body want to understand what has happened. However, a hospital can still fall outside the white area just through chance factors (see Q1 above)."]
        [:p
         "If we were looking only at one hospital, there is a 5% (1 in 20) probability that it will fall out of its range just by chance (with a 1 in 40 probability of being on a particular side)."]
        [:p
         "However, if we are looking at all 14 hospitals at once there’s actually a 50% probability (10 in 20) that at least one hospital will fall outside its range just by chance! This is similar to the difference between flipping one coin and flipping many: if I only flip one coin there is a 50% probability that I’ll get one head whereas if I flipped, say, the four coins in a row the probability of me getting at least one head in the four throws goes up to 94%."]
        [:p
         "So, on average, we’d anticipate half of NICOR’s annual reports to have at least one centre outside its range, either above or below, by chance alone."]
        [:p
         "Considering now the “extended predicted range”, if we were looking only at one hospital, there is a 1 in 500 probability that it will fall in the dark area just by chance (with a 1 in 1000 probability of being in the dark grey area and a 1 in 1000 probability of being in the dark blue area). If we are looking at all 14 hospitals at once there’s still a low probability (1 in 30) that at least one hospital will fall in the dark area just by chance. This is why a hospital’s observed survival rate falling outside the extended predicted range is considered strong evidence that the chances of a patient surviving at that hospital are different to what is predicted."]
        [:p
         "We do want to know whether there could be a reason for a hospital to have fallen out of its range. One reason could be that the data submitted is of poor quality. The first step undertaken by NICOR is to check whether this is the case and published results have been through a quality control process with the hospital in question to ensure, as far as possible, that this is not the case. A further reason may be that some of the patients are unusual with more complex or rarer health problems, and that are not well accounted for by the statistical model. It could also just be due to chance factors. The final reason NICOR considers is that there is a potential problem in the pathway of care and it is important to either rule this out or start to improve care if the national audit body decides that this is the reason. This is why, particularly "
         [:strong
          "when a hospital falls outside its range"]
         ", the hospital and the national audit body examine the data and their clinical processes in more detail to try see if there’s anything to worry about or if there’s something the other hospitals can learn."]
        [:p
         "The safety or otherwise of a hospital "
         [:strong
          "cannot"]
         " be determined from survival data alone. If a hospital actual survival is below the predicted range, the "
         [:a
          {:href "https://www.ucl.ac.uk/nicor/audits/congenital/governance"}
          "National Congenital Heart Disease Audit Steering Committee "]
         " is notified. The Committee in turn notifies the Medical Director and the lead doctor for congenital heart disease at that hospital and a detailed examination of the hospital’s results takes place. There are established and "
         [:a
          {:href "https://www.gov.uk/government/publications/detection-and-management-of-outliers-guidance-prepared-by-national-clinical-audit-advisory-group"}
          "published procedures"]
         " involving the Royal College of Surgeons and/or the Care Quality Commission which can be put into action if the detailed assessment raises concerns about care."]
        [:p
         "The report on individual instances like this would then be published online by the national audit body, alongside the relevant NHCDA Annual Report. "
         [:strong
          "[link to a hospital-specific report if relevant]"]
         " . Such reports for previous years can be found on the NICOR publications website."]]]

      [:.no-break
       [:h2#q7.-which-hospital-should-i-go-to
        "Q7. Which hospital should I go to?"]
       [:.well
        [:p
         "You can use the national audit data to see how the different hospitals are doing compared to what is predicted from the statistical model for a particular time period. You can also use the national audit website to explore how many operations of each type a hospital does and survival outcomes for each of these. However, this cannot, in itself, tell you which hospital you should go to and does not provide proof that one hospital is “better” than any other, and remember that outcomes will vary from year to year through chance factors."]
        [:p
         "When considering which hospital, there are many factors to take into account, including how well the clinical team know your child and his or her medical history, any particular medical issues that your child has (for instance, some hospitals specialise in treating children with a particular problem) and how far the hospital is from your home."]
        [:p
         "You should discuss your child’s care with their specialist cardiologist to determine what the best treatment option is for your child."]]]


      [:.no-break
       [:h2#q8.-can-the-published-data-tell-me-about-the-risks-for-my-child
        "Q8. Can the published data tell me about the risks for my child?"]
       [:.well
        [:p
         "No, the published data cannot tell you about the risk for your child specifically – this will depend on other factors that are not necessarily captured in the national data. Your child’s specialist cardiologist and/or cardiac surgeon will be able to discuss this with you."]]]

      [:.no-break
       [:h2#q9.-how-reliable-are-the-data
        "Q9. How reliable are the data?"]
       [:.well
        [:p
         "The data come from the National Institute for Cardiovascular Outcomes Research (UCL NICOR) which collects national data for the National Heart Disease Audits. All hospitals performing heart surgery in children have to submit their data in a standard format to NICOR. All hospitals are independently audited each year as part of a data validation process (to check the quality of the data submitted)."]
        [:p
         "So, the data are of high quality. While no large dataset is perfect (e.g., it is inevitable that a few records will not be 100% accurate), this dataset is among the most detailed and complete in the world for children’s heart surgery."]]]

      [:.no-break
       [:h2#q10.-what-are-the-limitations-of-the-data
        "Q10. What are the limitations of the data? "]
       [:.well
        [:p
         "Apart from occasional inaccuracies in the data, there are other limits to what the data can tell us about surgery outcomes. There are risk factors not routinely collected (for instance the size or relative severity of a child’s heart defect) which means these cannot be accounted for in our statistical prediction method. Different hospitals might also record the same heart condition slightly differently and this might affect the survival percentage predicted for these hospitals."]
        [:p
         "These data are also snapshots in time of what happened at each specialist hospital. A number of particularly challenging patients one year (in ways not accounted for in our prediction) or a run of chance factors could cause a very good hospital to have worse outcomes than predicted. So we need to be careful about reading too much into any single time period."]]]

      [:.no-break
       [:h2#q11-what-about-survival-after-30-days-and-quality-of-life
        "Q11 What about survival after 30 days? And quality of life? "]
       [:.well
        [:p
         "This data set only looks at what happens shortly after surgery. These data cannot tell us about longer term (e.g. 90 day, 1 year or 5 year) survival, or other outcomes such as post-surgery complication rates or the impact of surgery on the child or their family. There is a lot of "
         [:a
          {:href "http://www.gosh.nhs.uk/medical-information/clinical-specialties/cardiothoracic-surgery-information-parents-and-visitors/research/complications-after-heart-surgery-children"}
          "active research"]
         " going right now (due to finish around 2018) investigating how to capture, interpret and publish longer term survival and complication rates so hopefully this information will be available in the next 5 years."]
        [:p
         "Neither can it tell us about how or why a hospital achieved the recorded results, so it cannot, by itself, tell us whether one hospital offers better or worse quality care than any other. These data cannot tell you what the results are likely to be next year. It also cannot tell us anything about what happens to children who never get operated on for whatever reason, since data on these children is not currently submitted to national audit."]]]

      [:.no-break
       [:h2#q12.-what-is-the-risk-adjustment-method-used-by-national-audit
        "Q12. What is the risk adjustment method used by National Audit? "]
       [:.well
        [:p
         "The National Audit body uses a risk adjustment method developed by researchers at Great Ormond Street Hospital and University College London called PRAiS (Partial Risk Adjustment in Surgery). The underlying methodology of this method is published in the "
         [:a
          {:href "https://www.ucl.ac.uk/operational-research/AnalysisTools/PRAiS"}
          "academic literature"]
         " if you are interested in learning more details."]]]

      [:.no-break
       [:h2#q13.-are-there-any-limitations-to-risk-adjustment
        "Q13. Are there any limitations to risk adjustment? "]
       [:.well
        [:p
         "Yes there are. Risk adjustment allows for fairer comparisons to be made between hospitals but it still cannot make it completely fair. It is always ‘partial’ and there will always be important risk factors that are not routinely recorded and so cannot be captured by risk adjustment methods. Risk adjustment methods are developed on historical data (typically at least a year out of date) and cannot necessarily adjust or account for future changes to the way data is collected (for instance more complete data) or new methods of surgical or medical management."]]]


      ]]]])
