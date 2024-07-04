"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6985], {
        66985: function(t, i, a) {
            a.d(i, {
                Qy: function() {
                    return s
                },
                gB: function() {
                    return _
                },
                sd: function() {
                    return g
                }
            });
            var e = a(97202),
                n = a(47282),
                r = a(38942),
                o = a(99879),
                s = {
                    LINK: "link",
                    A: "a"
                },
                c = new URLSearchParams("t=".concat(JSON.stringify({
                    wizardTrigger: "Nav Bar"
                }))),
                u = "?".concat(c.toString());
            var g = {
                    home: {
                        i18nKey: "navigation_home",
                        url: "/",
                        tag: s.LINK
                    },
                    variation1SitterHomepage: {
                        i18nKey: "navigation_home",
                        url: o._j.search.listings(),
                        tag: s.LINK
                    },
                    blog: {
                        i18nKey: "navigation_blog",
                        url: "/blog/",
                        tag: s.LINK
                    },
                    joinNow: {
                        i18nKey: "navigation_joinNow",
                        url: o._j.accounts.explorePlans(),
                        tag: s.LINK
                    },
                    joinNowVariation: {
                        i18nKey: "navigation_joinNow_variation",
                        url: o._j.accounts.explorePlans(),
                        tag: s.LINK
                    },
                    joinNowVariationShort: {
                        i18nKey: "navigation_joinNow_variation_short",
                        url: o._j.accounts.explorePlans(),
                        tag: s.LINK
                    },
                    partialOwnerStartFreeTrial: {
                        i18nKey: "components_cta_start_free_trial",
                        url: o._j.accounts.explorePlans(),
                        tag: s.LINK
                    },
                    checkoutShort: {
                        i18nKey: "navigation_account_checkoutShort",
                        url: o._j.accounts.checkout.payment(),
                        tag: s.LINK
                    },
                    checkout: {
                        i18nKey: "navigation_account_checkout",
                        url: o._j.accounts.checkout.payment(),
                        tag: s.LINK
                    },
                    referAFriend: {
                        i18nKey: "navigation_account_referAFriend",
                        url: o._j.accounts.referAFriend(),
                        tag: s.LINK
                    },
                    referFriend: {
                        i18nKey: "navigation_account_referFriend",
                        url: o._j.accounts.referAFriend(),
                        tag: s.LINK
                    },
                    searchSits: {
                        i18nKey: "navigation_searchSits",
                        url: o._j.search.listings(),
                        tag: s.LINK
                    },
                    searchSitsWithRegwall: function() {
                        var t = new URLSearchParams;
                        return t.set("regwall", n.z.SITTER), t.set("next", o._j.search.listings()), t.set("openMethod", e.c.FIND_A_SIT_NAVBAR_LINK), t.set("isRegwallCloseable", !1), t.set("heading", "Create your free account"), t.set("subheading", "Create your free account to view verified and reviewed house sits near you"), {
                            i18nKey: "navigation_searchSits",
                            url: "".concat(o._j.search.listings(), "#").concat(t.toString()),
                            tag: s.LINK
                        }
                    }(),
                    getSitter: {
                        i18nKey: "navigation_getASitter",
                        url: o._j.search.profiles(),
                        tag: s.LINK
                    },
                    findHouses: {
                        i18nKey: "navigation_findHouses",
                        url: o._j.search.listings(),
                        tag: s.LINK
                    },
                    findAHouseSitWizard: {
                        i18nKey: "navigation_searchSits",
                        url: "".concat(o._j.search.findAHouseSitWizard()).concat(u),
                        tag: s.LINK,
                        trackLink: "Find a House Sit Nav bar link"
                    },
                    searchSitters: {
                        i18nKey: "navigation_searchSitters",
                        url: o._j.search.profiles(),
                        tag: s.LINK
                    },
                    searchSittersWithRegwall: function() {
                        var t = new URLSearchParams;
                        return t.set("regwall", n.z.OWNER), t.set("next", o._j.search.profiles()), t.set("openMethod", e.c.FIND_A_SITTER_NAVBAR_LINK), t.set("isRegwallCloseable", !1), t.set("heading", "Create your free account"), t.set("subheading", "Create your free account to view verified and reviewed pet sitters near you"), {
                            i18nKey: "navigation_searchSitters",
                            url: "".concat(o._j.search.profiles(), "#").concat(t.toString()),
                            tag: s.LINK
                        }
                    }(),
                    meetSitters: {
                        i18nKey: "navigation_meetSitters",
                        url: o._j.search.profiles(),
                        tag: s.LINK
                    },
                    findASitterWizard: {
                        i18nKey: "navigation_searchSitters",
                        url: "".concat(o._j.search.findASitterWizard()).concat(u),
                        tag: s.LINK,
                        trackLink: "Find a Pet Sitter nav bar link"
                    },
                    howItWorks: {
                        i18nKey: "navigation_howItWorks",
                        url: o._j.howItWorks.findASitter(),
                        tag: s.LINK
                    },
                    login: {
                        i18nKey: "navigation_login",
                        url: o._j.login(),
                        tag: s.LINK
                    },
                    help: {
                        i18nKey: "navigation_help",
                        url: "https://support.trustedhousesitters.com/",
                        tag: s.A
                    },
                    settings: {
                        i18nKey: "navigation_account_settings",
                        url: o._j.user.settings.hub(),
                        tag: s.LINK
                    },
                    dashboard: {
                        i18nKey: "navigation_account_dashboard",
                        url: o._j.accounts.profile.dashboard(),
                        tag: s.LINK
                    },
                    inbox: {
                        i18nKey: "navigation_account_inbox",
                        url: (0, r.k8)(),
                        tag: s.LINK
                    },
                    oldFavorites: {
                        i18nKey: "navigation_account_favorites",
                        url: o._j.accounts.profile.favorites(),
                        tag: s.LINK
                    },
                    favorites: {
                        i18nKey: "navigation_account_favorites",
                        url: o._j.user.favourites(),
                        tag: s.LINK
                    },
                    verifications: {
                        i18nKey: "navigation_account_verifications",
                        url: o._j.user.verifications(),
                        tag: s.LINK
                    },
                    pastSits: {
                        i18nKey: "navigation_account_past_sits",
                        url: o._j.user.assignments.pastSits(),
                        tag: s.LINK
                    },
                    pastSitters: {
                        i18nKey: "navigation_account_past_sitters",
                        url: o._j.user.assignments.pastSitters(),
                        tag: s.LINK
                    },
                    upgrade: {
                        i18nKey: "navigation_account_upgradeFullMembership",
                        url: o._j.accounts.explorePlans(),
                        tag: s.LINK
                    },
                    upgradeCTA: {
                        i18nKey: "navigation_upgrade_cta",
                        url: o._j.accounts.explorePlans(),
                        tag: s.LINK
                    },
                    renew: {
                        i18nKey: "navigation_account_renew",
                        url: o._j.accounts.explorePlans(),
                        tag: s.LINK
                    },
                    aboutUs: {
                        i18nKey: "navigation_aboutUs",
                        url: "/pages/about/",
                        tag: s.LINK
                    },
                    forum: {
                        i18nKey: "navigation_forum",
                        url: "https://forum.trustedhousesitters.com/",
                        tag: s.A
                    },
                    findASitter: {
                        i18nKey: "navigation_findASitter",
                        url: "/house-and-pet-sitters/",
                        tag: s.LINK
                    },
                    trustAndSafety: {
                        i18nKey: "navigation_trustAndSafety",
                        url: "/trust-and-safety/",
                        tag: s.LINK
                    },
                    pricing: {
                        i18nKey: "navigation_pricing",
                        url: o._j.accounts.signUp.pricing(),
                        tag: s.LINK
                    },
                    privacy: {
                        i18nKey: "navigation_privacy",
                        url: "/privacy-policy/",
                        tag: s.LINK
                    },
                    siteMap: {
                        i18nKey: "navigation_siteMap",
                        url: "/sitemap/",
                        tag: s.LINK
                    },
                    careers: {
                        i18nKey: "navigation_careers",
                        url: "/careers/",
                        tag: s.LINK
                    },
                    explorePlans: {
                        i18nKey: "navigation_explore_plans",
                        url: "/accounts/explore-plans/",
                        tag: s.LINK
                    },
                    pricingPlans: {
                        i18nKey: "navigation_pricing",
                        url: "/pricing/",
                        tag: s.LINK
                    },
                    yourListing: {
                        i18nKey: "navigation_your_listing",
                        url: o._j.user.listing.edit.hubRedirect(),
                        tag: s.LINK
                    },
                    yourProfile: {
                        i18nKey: "navigation_your_profile",
                        url: o._j.user.profile.edit.hub(),
                        tag: s.LINK
                    }
                },
                _ = {
                    findASitter: {
                        i18nKey: "navigation_howItWorks_findASitter",
                        url: o._j.howItWorks.findASitter(),
                        tag: s.LINK
                    },
                    findAHouseSit: {
                        i18nKey: "navigation_howItWorks_findAHouseSit",
                        url: o._j.howItWorks.findAHouseSit(),
                        tag: s.LINK
                    }
                }
        }
    }
]);
//# sourceMappingURL=client.6985.v1.aec026198a0a2754fbfb.js.map