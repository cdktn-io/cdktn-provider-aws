# `prometheusScraper` Submodule <a name="`prometheusScraper` Submodule" id="@cdktn/provider-aws.prometheusScraper"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusScraper <a name="PrometheusScraper" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper aws_prometheus_scraper}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraper;

PrometheusScraper.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .scrapeConfiguration(java.lang.String)
//  .alias(java.lang.String)
//  .destination(IResolvable|java.util.List<PrometheusScraperDestination>)
//  .region(java.lang.String)
//  .roleConfiguration(IResolvable|java.util.List<PrometheusScraperRoleConfiguration>)
//  .source(IResolvable|java.util.List<PrometheusScraperSource>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrometheusScraperTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.scrapeConfiguration">scrapeConfiguration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#scrape_configuration PrometheusScraper#scrape_configuration}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#alias PrometheusScraper#alias}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.destination">destination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>></code> | destination block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.roleConfiguration">roleConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>></code> | role_configuration block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.source">source</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>></code> | source block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#tags PrometheusScraper#tags}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `scrapeConfiguration`<sup>Required</sup> <a name="scrapeConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.scrapeConfiguration"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#scrape_configuration PrometheusScraper#scrape_configuration}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#alias PrometheusScraper#alias}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.destination"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#destination PrometheusScraper#destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#region PrometheusScraper#region}

---

##### `roleConfiguration`<sup>Optional</sup> <a name="roleConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.roleConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>>

role_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#role_configuration PrometheusScraper#role_configuration}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.source"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#source PrometheusScraper#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#tags PrometheusScraper#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#timeouts PrometheusScraper#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putRoleConfiguration">putRoleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetDestination">resetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetRoleConfiguration">resetRoleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putDestination"></a>

```java
public void putDestination(IResolvable|java.util.List<PrometheusScraperDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putDestination.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>>

---

##### `putRoleConfiguration` <a name="putRoleConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putRoleConfiguration"></a>

```java
public void putRoleConfiguration(IResolvable|java.util.List<PrometheusScraperRoleConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putRoleConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putSource"></a>

```java
public void putSource(IResolvable|java.util.List<PrometheusScraperSource> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putSource.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putTimeouts"></a>

```java
public void putTimeouts(PrometheusScraperTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetDestination"></a>

```java
public void resetDestination()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRoleConfiguration` <a name="resetRoleConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetRoleConfiguration"></a>

```java
public void resetRoleConfiguration()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetSource"></a>

```java
public void resetSource()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PrometheusScraper resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isConstruct"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraper;

PrometheusScraper.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraper;

PrometheusScraper.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraper;

PrometheusScraper.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraper;

PrometheusScraper.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrometheusScraper.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PrometheusScraper resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrometheusScraper to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrometheusScraper that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PrometheusScraper to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList">PrometheusScraperDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.roleConfiguration">roleConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList">PrometheusScraperRoleConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.source">source</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList">PrometheusScraperSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference">PrometheusScraperTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.destinationInput">destinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.roleConfigurationInput">roleConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.scrapeConfigurationInput">scrapeConfigurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.sourceInput">sourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.scrapeConfiguration">scrapeConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.destination"></a>

```java
public PrometheusScraperDestinationList getDestination();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList">PrometheusScraperDestinationList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `roleConfiguration`<sup>Required</sup> <a name="roleConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.roleConfiguration"></a>

```java
public PrometheusScraperRoleConfigurationList getRoleConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList">PrometheusScraperRoleConfigurationList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.source"></a>

```java
public PrometheusScraperSourceList getSource();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList">PrometheusScraperSourceList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.timeouts"></a>

```java
public PrometheusScraperTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference">PrometheusScraperTimeoutsOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.destinationInput"></a>

```java
public IResolvable|java.util.List<PrometheusScraperDestination> getDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleConfigurationInput`<sup>Optional</sup> <a name="roleConfigurationInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.roleConfigurationInput"></a>

```java
public IResolvable|java.util.List<PrometheusScraperRoleConfiguration> getRoleConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>>

---

##### `scrapeConfigurationInput`<sup>Optional</sup> <a name="scrapeConfigurationInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.scrapeConfigurationInput"></a>

```java
public java.lang.String getScrapeConfigurationInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.sourceInput"></a>

```java
public IResolvable|java.util.List<PrometheusScraperSource> getSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.timeoutsInput"></a>

```java
public IResolvable|PrometheusScraperTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `scrapeConfiguration`<sup>Required</sup> <a name="scrapeConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.scrapeConfiguration"></a>

```java
public java.lang.String getScrapeConfiguration();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraper.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusScraperConfig <a name="PrometheusScraperConfig" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperConfig;

PrometheusScraperConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .scrapeConfiguration(java.lang.String)
//  .alias(java.lang.String)
//  .destination(IResolvable|java.util.List<PrometheusScraperDestination>)
//  .region(java.lang.String)
//  .roleConfiguration(IResolvable|java.util.List<PrometheusScraperRoleConfiguration>)
//  .source(IResolvable|java.util.List<PrometheusScraperSource>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(PrometheusScraperTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.scrapeConfiguration">scrapeConfiguration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#scrape_configuration PrometheusScraper#scrape_configuration}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#alias PrometheusScraper#alias}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.destination">destination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>></code> | destination block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.roleConfiguration">roleConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>></code> | role_configuration block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.source">source</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>></code> | source block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#tags PrometheusScraper#tags}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `scrapeConfiguration`<sup>Required</sup> <a name="scrapeConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.scrapeConfiguration"></a>

```java
public java.lang.String getScrapeConfiguration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#scrape_configuration PrometheusScraper#scrape_configuration}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#alias PrometheusScraper#alias}.

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.destination"></a>

```java
public IResolvable|java.util.List<PrometheusScraperDestination> getDestination();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#destination PrometheusScraper#destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#region PrometheusScraper#region}

---

##### `roleConfiguration`<sup>Optional</sup> <a name="roleConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.roleConfiguration"></a>

```java
public IResolvable|java.util.List<PrometheusScraperRoleConfiguration> getRoleConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>>

role_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#role_configuration PrometheusScraper#role_configuration}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.source"></a>

```java
public IResolvable|java.util.List<PrometheusScraperSource> getSource();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#source PrometheusScraper#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#tags PrometheusScraper#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperConfig.property.timeouts"></a>

```java
public PrometheusScraperTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#timeouts PrometheusScraper#timeouts}

---

### PrometheusScraperDestination <a name="PrometheusScraperDestination" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperDestination;

PrometheusScraperDestination.builder()
//  .amp(IResolvable|java.util.List<PrometheusScraperDestinationAmp>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination.property.amp">amp</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>></code> | amp block. |

---

##### `amp`<sup>Optional</sup> <a name="amp" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination.property.amp"></a>

```java
public IResolvable|java.util.List<PrometheusScraperDestinationAmp> getAmp();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>>

amp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#amp PrometheusScraper#amp}

---

### PrometheusScraperDestinationAmp <a name="PrometheusScraperDestinationAmp" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperDestinationAmp;

PrometheusScraperDestinationAmp.builder()
    .workspaceArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp.property.workspaceArn">workspaceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#workspace_arn PrometheusScraper#workspace_arn}. |

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp.property.workspaceArn"></a>

```java
public java.lang.String getWorkspaceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#workspace_arn PrometheusScraper#workspace_arn}.

---

### PrometheusScraperRoleConfiguration <a name="PrometheusScraperRoleConfiguration" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperRoleConfiguration;

PrometheusScraperRoleConfiguration.builder()
//  .sourceRoleArn(java.lang.String)
//  .targetRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration.property.sourceRoleArn">sourceRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#source_role_arn PrometheusScraper#source_role_arn}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration.property.targetRoleArn">targetRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#target_role_arn PrometheusScraper#target_role_arn}. |

---

##### `sourceRoleArn`<sup>Optional</sup> <a name="sourceRoleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration.property.sourceRoleArn"></a>

```java
public java.lang.String getSourceRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#source_role_arn PrometheusScraper#source_role_arn}.

---

##### `targetRoleArn`<sup>Optional</sup> <a name="targetRoleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration.property.targetRoleArn"></a>

```java
public java.lang.String getTargetRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#target_role_arn PrometheusScraper#target_role_arn}.

---

### PrometheusScraperSource <a name="PrometheusScraperSource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperSource;

PrometheusScraperSource.builder()
//  .eks(IResolvable|java.util.List<PrometheusScraperSourceEks>)
//  .vpc(IResolvable|java.util.List<PrometheusScraperSourceVpc>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource.property.eks">eks</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>></code> | eks block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource.property.vpc">vpc</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>></code> | vpc block. |

---

##### `eks`<sup>Optional</sup> <a name="eks" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource.property.eks"></a>

```java
public IResolvable|java.util.List<PrometheusScraperSourceEks> getEks();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>>

eks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#eks PrometheusScraper#eks}

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource.property.vpc"></a>

```java
public IResolvable|java.util.List<PrometheusScraperSourceVpc> getVpc();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>>

vpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#vpc PrometheusScraper#vpc}

---

### PrometheusScraperSourceEks <a name="PrometheusScraperSourceEks" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperSourceEks;

PrometheusScraperSourceEks.builder()
    .clusterArn(java.lang.String)
    .subnetIds(java.util.List<java.lang.String>)
//  .securityGroupIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#cluster_arn PrometheusScraper#cluster_arn}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#subnet_ids PrometheusScraper#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#security_group_ids PrometheusScraper#security_group_ids}. |

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#cluster_arn PrometheusScraper#cluster_arn}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#subnet_ids PrometheusScraper#subnet_ids}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#security_group_ids PrometheusScraper#security_group_ids}.

---

### PrometheusScraperSourceVpc <a name="PrometheusScraperSourceVpc" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperSourceVpc;

PrometheusScraperSourceVpc.builder()
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#security_group_ids PrometheusScraper#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#subnet_ids PrometheusScraper#subnet_ids}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#security_group_ids PrometheusScraper#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#subnet_ids PrometheusScraper#subnet_ids}.

---

### PrometheusScraperTimeouts <a name="PrometheusScraperTimeouts" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperTimeouts;

PrometheusScraperTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#create PrometheusScraper#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#delete PrometheusScraper#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/prometheus_scraper#update PrometheusScraper#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusScraperDestinationAmpList <a name="PrometheusScraperDestinationAmpList" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperDestinationAmpList;

new PrometheusScraperDestinationAmpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.get"></a>

```java
public PrometheusScraperDestinationAmpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrometheusScraperDestinationAmp> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>>

---


### PrometheusScraperDestinationAmpOutputReference <a name="PrometheusScraperDestinationAmpOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperDestinationAmpOutputReference;

new PrometheusScraperDestinationAmpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.workspaceArnInput">workspaceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.workspaceArn">workspaceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workspaceArnInput`<sup>Optional</sup> <a name="workspaceArnInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.workspaceArnInput"></a>

```java
public java.lang.String getWorkspaceArnInput();
```

- *Type:* java.lang.String

---

##### `workspaceArn`<sup>Required</sup> <a name="workspaceArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.workspaceArn"></a>

```java
public java.lang.String getWorkspaceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusScraperDestinationAmp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>

---


### PrometheusScraperDestinationList <a name="PrometheusScraperDestinationList" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperDestinationList;

new PrometheusScraperDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.get"></a>

```java
public PrometheusScraperDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrometheusScraperDestination> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>>

---


### PrometheusScraperDestinationOutputReference <a name="PrometheusScraperDestinationOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperDestinationOutputReference;

new PrometheusScraperDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.putAmp">putAmp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resetAmp">resetAmp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmp` <a name="putAmp" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.putAmp"></a>

```java
public void putAmp(IResolvable|java.util.List<PrometheusScraperDestinationAmp> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.putAmp.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>>

---

##### `resetAmp` <a name="resetAmp" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.resetAmp"></a>

```java
public void resetAmp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.amp">amp</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList">PrometheusScraperDestinationAmpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.ampInput">ampInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amp`<sup>Required</sup> <a name="amp" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.amp"></a>

```java
public PrometheusScraperDestinationAmpList getAmp();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmpList">PrometheusScraperDestinationAmpList</a>

---

##### `ampInput`<sup>Optional</sup> <a name="ampInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.ampInput"></a>

```java
public IResolvable|java.util.List<PrometheusScraperDestinationAmp> getAmpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationAmp">PrometheusScraperDestinationAmp</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusScraperDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperDestination">PrometheusScraperDestination</a>

---


### PrometheusScraperRoleConfigurationList <a name="PrometheusScraperRoleConfigurationList" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperRoleConfigurationList;

new PrometheusScraperRoleConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.get"></a>

```java
public PrometheusScraperRoleConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrometheusScraperRoleConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>>

---


### PrometheusScraperRoleConfigurationOutputReference <a name="PrometheusScraperRoleConfigurationOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperRoleConfigurationOutputReference;

new PrometheusScraperRoleConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resetSourceRoleArn">resetSourceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resetTargetRoleArn">resetTargetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceRoleArn` <a name="resetSourceRoleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resetSourceRoleArn"></a>

```java
public void resetSourceRoleArn()
```

##### `resetTargetRoleArn` <a name="resetTargetRoleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.resetTargetRoleArn"></a>

```java
public void resetTargetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.sourceRoleArnInput">sourceRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.targetRoleArnInput">targetRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.sourceRoleArn">sourceRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.targetRoleArn">targetRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceRoleArnInput`<sup>Optional</sup> <a name="sourceRoleArnInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.sourceRoleArnInput"></a>

```java
public java.lang.String getSourceRoleArnInput();
```

- *Type:* java.lang.String

---

##### `targetRoleArnInput`<sup>Optional</sup> <a name="targetRoleArnInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.targetRoleArnInput"></a>

```java
public java.lang.String getTargetRoleArnInput();
```

- *Type:* java.lang.String

---

##### `sourceRoleArn`<sup>Required</sup> <a name="sourceRoleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.sourceRoleArn"></a>

```java
public java.lang.String getSourceRoleArn();
```

- *Type:* java.lang.String

---

##### `targetRoleArn`<sup>Required</sup> <a name="targetRoleArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.targetRoleArn"></a>

```java
public java.lang.String getTargetRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusScraperRoleConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperRoleConfiguration">PrometheusScraperRoleConfiguration</a>

---


### PrometheusScraperSourceEksList <a name="PrometheusScraperSourceEksList" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperSourceEksList;

new PrometheusScraperSourceEksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.get"></a>

```java
public PrometheusScraperSourceEksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrometheusScraperSourceEks> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>>

---


### PrometheusScraperSourceEksOutputReference <a name="PrometheusScraperSourceEksOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperSourceEksOutputReference;

new PrometheusScraperSourceEksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.clusterArnInput">clusterArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.clusterArn">clusterArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.clusterArnInput"></a>

```java
public java.lang.String getClusterArnInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.clusterArn"></a>

```java
public java.lang.String getClusterArn();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusScraperSourceEks getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>

---


### PrometheusScraperSourceList <a name="PrometheusScraperSourceList" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperSourceList;

new PrometheusScraperSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.get"></a>

```java
public PrometheusScraperSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrometheusScraperSource> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>>

---


### PrometheusScraperSourceOutputReference <a name="PrometheusScraperSourceOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperSourceOutputReference;

new PrometheusScraperSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putEks">putEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putVpc">putVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resetEks">resetEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEks` <a name="putEks" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putEks"></a>

```java
public void putEks(IResolvable|java.util.List<PrometheusScraperSourceEks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putEks.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>>

---

##### `putVpc` <a name="putVpc" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putVpc"></a>

```java
public void putVpc(IResolvable|java.util.List<PrometheusScraperSourceVpc> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.putVpc.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>>

---

##### `resetEks` <a name="resetEks" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resetEks"></a>

```java
public void resetEks()
```

##### `resetVpc` <a name="resetVpc" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.resetVpc"></a>

```java
public void resetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.eks">eks</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList">PrometheusScraperSourceEksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList">PrometheusScraperSourceVpcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.eksInput">eksInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.vpcInput">vpcInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eks`<sup>Required</sup> <a name="eks" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.eks"></a>

```java
public PrometheusScraperSourceEksList getEks();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEksList">PrometheusScraperSourceEksList</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.vpc"></a>

```java
public PrometheusScraperSourceVpcList getVpc();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList">PrometheusScraperSourceVpcList</a>

---

##### `eksInput`<sup>Optional</sup> <a name="eksInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.eksInput"></a>

```java
public IResolvable|java.util.List<PrometheusScraperSourceEks> getEksInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceEks">PrometheusScraperSourceEks</a>>

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.vpcInput"></a>

```java
public IResolvable|java.util.List<PrometheusScraperSourceVpc> getVpcInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusScraperSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSource">PrometheusScraperSource</a>

---


### PrometheusScraperSourceVpcList <a name="PrometheusScraperSourceVpcList" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperSourceVpcList;

new PrometheusScraperSourceVpcList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.get"></a>

```java
public PrometheusScraperSourceVpcOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrometheusScraperSourceVpc> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>>

---


### PrometheusScraperSourceVpcOutputReference <a name="PrometheusScraperSourceVpcOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperSourceVpcOutputReference;

new PrometheusScraperSourceVpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpcOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusScraperSourceVpc getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperSourceVpc">PrometheusScraperSourceVpc</a>

---


### PrometheusScraperTimeoutsOutputReference <a name="PrometheusScraperTimeoutsOutputReference" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper.PrometheusScraperTimeoutsOutputReference;

new PrometheusScraperTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusScraperTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraper.PrometheusScraperTimeouts">PrometheusScraperTimeouts</a>

---



