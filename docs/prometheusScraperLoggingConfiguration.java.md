# `prometheusScraperLoggingConfiguration` Submodule <a name="`prometheusScraperLoggingConfiguration` Submodule" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusScraperLoggingConfiguration <a name="PrometheusScraperLoggingConfiguration" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration aws_prometheus_scraper_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfiguration;

PrometheusScraperLoggingConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .scraperId(java.lang.String)
//  .loggingDestination(IResolvable|java.util.List<PrometheusScraperLoggingConfigurationLoggingDestination>)
//  .region(java.lang.String)
//  .scraperComponents(java.util.List<java.lang.String>)
//  .timeouts(PrometheusScraperLoggingConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scraperId">scraperId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_id PrometheusScraperLoggingConfiguration#scraper_id}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.loggingDestination">loggingDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>></code> | logging_destination block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scraperComponents">scraperComponents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_components PrometheusScraperLoggingConfiguration#scraper_components}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `scraperId`<sup>Required</sup> <a name="scraperId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scraperId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_id PrometheusScraperLoggingConfiguration#scraper_id}.

---

##### `loggingDestination`<sup>Optional</sup> <a name="loggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.loggingDestination"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>>

logging_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#logging_destination PrometheusScraperLoggingConfiguration#logging_destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#region PrometheusScraperLoggingConfiguration#region}

---

##### `scraperComponents`<sup>Optional</sup> <a name="scraperComponents" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scraperComponents"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_components PrometheusScraperLoggingConfiguration#scraper_components}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#timeouts PrometheusScraperLoggingConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putLoggingDestination">putLoggingDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetLoggingDestination">resetLoggingDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetScraperComponents">resetScraperComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingDestination` <a name="putLoggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putLoggingDestination"></a>

```java
public void putLoggingDestination(IResolvable|java.util.List<PrometheusScraperLoggingConfigurationLoggingDestination> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putLoggingDestination.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts"></a>

```java
public void putTimeouts(PrometheusScraperLoggingConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

---

##### `resetLoggingDestination` <a name="resetLoggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetLoggingDestination"></a>

```java
public void resetLoggingDestination()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetScraperComponents` <a name="resetScraperComponents" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetScraperComponents"></a>

```java
public void resetScraperComponents()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PrometheusScraperLoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfiguration;

PrometheusScraperLoggingConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfiguration;

PrometheusScraperLoggingConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfiguration;

PrometheusScraperLoggingConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfiguration;

PrometheusScraperLoggingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrometheusScraperLoggingConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PrometheusScraperLoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrometheusScraperLoggingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrometheusScraperLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PrometheusScraperLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestination">loggingDestination</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList">PrometheusScraperLoggingConfigurationLoggingDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference">PrometheusScraperLoggingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestinationInput">loggingDestinationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponentsInput">scraperComponentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperIdInput">scraperIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponents">scraperComponents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperId">scraperId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `loggingDestination`<sup>Required</sup> <a name="loggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestination"></a>

```java
public PrometheusScraperLoggingConfigurationLoggingDestinationList getLoggingDestination();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList">PrometheusScraperLoggingConfigurationLoggingDestinationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeouts"></a>

```java
public PrometheusScraperLoggingConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference">PrometheusScraperLoggingConfigurationTimeoutsOutputReference</a>

---

##### `loggingDestinationInput`<sup>Optional</sup> <a name="loggingDestinationInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestinationInput"></a>

```java
public IResolvable|java.util.List<PrometheusScraperLoggingConfigurationLoggingDestination> getLoggingDestinationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `scraperComponentsInput`<sup>Optional</sup> <a name="scraperComponentsInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponentsInput"></a>

```java
public java.util.List<java.lang.String> getScraperComponentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scraperIdInput`<sup>Optional</sup> <a name="scraperIdInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperIdInput"></a>

```java
public java.lang.String getScraperIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeoutsInput"></a>

```java
public IResolvable|PrometheusScraperLoggingConfigurationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `scraperComponents`<sup>Required</sup> <a name="scraperComponents" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponents"></a>

```java
public java.util.List<java.lang.String> getScraperComponents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scraperId`<sup>Required</sup> <a name="scraperId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperId"></a>

```java
public java.lang.String getScraperId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusScraperLoggingConfigurationConfig <a name="PrometheusScraperLoggingConfigurationConfig" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfigurationConfig;

PrometheusScraperLoggingConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .scraperId(java.lang.String)
//  .loggingDestination(IResolvable|java.util.List<PrometheusScraperLoggingConfigurationLoggingDestination>)
//  .region(java.lang.String)
//  .scraperComponents(java.util.List<java.lang.String>)
//  .timeouts(PrometheusScraperLoggingConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperId">scraperId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_id PrometheusScraperLoggingConfiguration#scraper_id}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.loggingDestination">loggingDestination</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>></code> | logging_destination block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperComponents">scraperComponents</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_components PrometheusScraperLoggingConfiguration#scraper_components}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `scraperId`<sup>Required</sup> <a name="scraperId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperId"></a>

```java
public java.lang.String getScraperId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_id PrometheusScraperLoggingConfiguration#scraper_id}.

---

##### `loggingDestination`<sup>Optional</sup> <a name="loggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.loggingDestination"></a>

```java
public IResolvable|java.util.List<PrometheusScraperLoggingConfigurationLoggingDestination> getLoggingDestination();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>>

logging_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#logging_destination PrometheusScraperLoggingConfiguration#logging_destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#region PrometheusScraperLoggingConfiguration#region}

---

##### `scraperComponents`<sup>Optional</sup> <a name="scraperComponents" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperComponents"></a>

```java
public java.util.List<java.lang.String> getScraperComponents();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#scraper_components PrometheusScraperLoggingConfiguration#scraper_components}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.timeouts"></a>

```java
public PrometheusScraperLoggingConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#timeouts PrometheusScraperLoggingConfiguration#timeouts}

---

### PrometheusScraperLoggingConfigurationLoggingDestination <a name="PrometheusScraperLoggingConfigurationLoggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfigurationLoggingDestination;

PrometheusScraperLoggingConfigurationLoggingDestination.builder()
//  .cloudwatchLogs(IResolvable|java.util.List<PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>></code> | cloudwatch_logs block. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs"></a>

```java
public IResolvable|java.util.List<PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs> getCloudwatchLogs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#cloudwatch_logs PrometheusScraperLoggingConfiguration#cloudwatch_logs}

---

### PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs <a name="PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs;

PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.builder()
    .logGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#log_group_arn PrometheusScraperLoggingConfiguration#log_group_arn}. |

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#log_group_arn PrometheusScraperLoggingConfiguration#log_group_arn}.

---

### PrometheusScraperLoggingConfigurationTimeouts <a name="PrometheusScraperLoggingConfigurationTimeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfigurationTimeouts;

PrometheusScraperLoggingConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#create PrometheusScraperLoggingConfiguration#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#delete PrometheusScraperLoggingConfiguration#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/resources/prometheus_scraper_logging_configuration#update PrometheusScraperLoggingConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList <a name="PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList;

new PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.get"></a>

```java
public PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>>

---


### PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference <a name="PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference;

new PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput"></a>

```java
public java.lang.String getLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

---


### PrometheusScraperLoggingConfigurationLoggingDestinationList <a name="PrometheusScraperLoggingConfigurationLoggingDestinationList" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfigurationLoggingDestinationList;

new PrometheusScraperLoggingConfigurationLoggingDestinationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.get"></a>

```java
public PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PrometheusScraperLoggingConfigurationLoggingDestination> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>>

---


### PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference <a name="PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference;

new PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs"></a>

```java
public void putCloudwatchLogs(IResolvable|java.util.List<PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs"></a>

```java
public void resetCloudwatchLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs"></a>

```java
public PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList getCloudwatchLogs();
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput"></a>

```java
public IResolvable|java.util.List<PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs> getCloudwatchLogsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusScraperLoggingConfigurationLoggingDestination getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>

---


### PrometheusScraperLoggingConfigurationTimeoutsOutputReference <a name="PrometheusScraperLoggingConfigurationTimeoutsOutputReference" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.prometheus_scraper_logging_configuration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference;

new PrometheusScraperLoggingConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PrometheusScraperLoggingConfigurationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

---



