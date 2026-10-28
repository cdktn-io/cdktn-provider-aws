# `cloudwatchOtelEnrichment` Submodule <a name="`cloudwatchOtelEnrichment` Submodule" id="@cdktn/provider-aws.cloudwatchOtelEnrichment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchOtelEnrichment <a name="CloudwatchOtelEnrichment" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment aws_cloudwatch_otel_enrichment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichment;

CloudwatchOtelEnrichment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .excludeFilter(IResolvable|java.util.List<CloudwatchOtelEnrichmentExcludeFilter>)
//  .includeFilter(IResolvable|java.util.List<CloudwatchOtelEnrichmentIncludeFilter>)
//  .region(java.lang.String)
//  .timeouts(CloudwatchOtelEnrichmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.excludeFilter">excludeFilter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>></code> | exclude_filter block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.includeFilter">includeFilter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>></code> | include_filter block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `excludeFilter`<sup>Optional</sup> <a name="excludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.excludeFilter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>>

exclude_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#exclude_filter CloudwatchOtelEnrichment#exclude_filter}

---

##### `includeFilter`<sup>Optional</sup> <a name="includeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.includeFilter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>>

include_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#include_filter CloudwatchOtelEnrichment#include_filter}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#region CloudwatchOtelEnrichment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#timeouts CloudwatchOtelEnrichment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putExcludeFilter">putExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putIncludeFilter">putIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetExcludeFilter">resetExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetIncludeFilter">resetIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExcludeFilter` <a name="putExcludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putExcludeFilter"></a>

```java
public void putExcludeFilter(IResolvable|java.util.List<CloudwatchOtelEnrichmentExcludeFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putExcludeFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>>

---

##### `putIncludeFilter` <a name="putIncludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putIncludeFilter"></a>

```java
public void putIncludeFilter(IResolvable|java.util.List<CloudwatchOtelEnrichmentIncludeFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putIncludeFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putTimeouts"></a>

```java
public void putTimeouts(CloudwatchOtelEnrichmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a>

---

##### `resetExcludeFilter` <a name="resetExcludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetExcludeFilter"></a>

```java
public void resetExcludeFilter()
```

##### `resetIncludeFilter` <a name="resetIncludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetIncludeFilter"></a>

```java
public void resetIncludeFilter()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchOtelEnrichment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichment;

CloudwatchOtelEnrichment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichment;

CloudwatchOtelEnrichment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichment;

CloudwatchOtelEnrichment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichment;

CloudwatchOtelEnrichment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudwatchOtelEnrichment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudwatchOtelEnrichment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudwatchOtelEnrichment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudwatchOtelEnrichment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchOtelEnrichment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFilter">excludeFilter</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList">CloudwatchOtelEnrichmentExcludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFilter">includeFilter</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList">CloudwatchOtelEnrichmentIncludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference">CloudwatchOtelEnrichmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFilterInput">excludeFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFilterInput">includeFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `excludeFilter`<sup>Required</sup> <a name="excludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFilter"></a>

```java
public CloudwatchOtelEnrichmentExcludeFilterList getExcludeFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList">CloudwatchOtelEnrichmentExcludeFilterList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `includeFilter`<sup>Required</sup> <a name="includeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFilter"></a>

```java
public CloudwatchOtelEnrichmentIncludeFilterList getIncludeFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList">CloudwatchOtelEnrichmentIncludeFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.timeouts"></a>

```java
public CloudwatchOtelEnrichmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference">CloudwatchOtelEnrichmentTimeoutsOutputReference</a>

---

##### `excludeFilterInput`<sup>Optional</sup> <a name="excludeFilterInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFilterInput"></a>

```java
public IResolvable|java.util.List<CloudwatchOtelEnrichmentExcludeFilter> getExcludeFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>>

---

##### `includeFilterInput`<sup>Optional</sup> <a name="includeFilterInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFilterInput"></a>

```java
public IResolvable|java.util.List<CloudwatchOtelEnrichmentIncludeFilter> getIncludeFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.timeoutsInput"></a>

```java
public IResolvable|CloudwatchOtelEnrichmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchOtelEnrichmentConfig <a name="CloudwatchOtelEnrichmentConfig" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichmentConfig;

CloudwatchOtelEnrichmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .excludeFilter(IResolvable|java.util.List<CloudwatchOtelEnrichmentExcludeFilter>)
//  .includeFilter(IResolvable|java.util.List<CloudwatchOtelEnrichmentIncludeFilter>)
//  .region(java.lang.String)
//  .timeouts(CloudwatchOtelEnrichmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.excludeFilter">excludeFilter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>></code> | exclude_filter block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.includeFilter">includeFilter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>></code> | include_filter block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `excludeFilter`<sup>Optional</sup> <a name="excludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.excludeFilter"></a>

```java
public IResolvable|java.util.List<CloudwatchOtelEnrichmentExcludeFilter> getExcludeFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>>

exclude_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#exclude_filter CloudwatchOtelEnrichment#exclude_filter}

---

##### `includeFilter`<sup>Optional</sup> <a name="includeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.includeFilter"></a>

```java
public IResolvable|java.util.List<CloudwatchOtelEnrichmentIncludeFilter> getIncludeFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>>

include_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#include_filter CloudwatchOtelEnrichment#include_filter}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#region CloudwatchOtelEnrichment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.timeouts"></a>

```java
public CloudwatchOtelEnrichmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#timeouts CloudwatchOtelEnrichment#timeouts}

---

### CloudwatchOtelEnrichmentExcludeFilter <a name="CloudwatchOtelEnrichmentExcludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichmentExcludeFilter;

CloudwatchOtelEnrichmentExcludeFilter.builder()
    .namespace(java.lang.String)
//  .metricNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter.property.metricNames">metricNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}.

---

##### `metricNames`<sup>Optional</sup> <a name="metricNames" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter.property.metricNames"></a>

```java
public java.util.List<java.lang.String> getMetricNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}.

---

### CloudwatchOtelEnrichmentIncludeFilter <a name="CloudwatchOtelEnrichmentIncludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichmentIncludeFilter;

CloudwatchOtelEnrichmentIncludeFilter.builder()
    .namespace(java.lang.String)
//  .metricNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter.property.metricNames">metricNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}.

---

##### `metricNames`<sup>Optional</sup> <a name="metricNames" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter.property.metricNames"></a>

```java
public java.util.List<java.lang.String> getMetricNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}.

---

### CloudwatchOtelEnrichmentTimeouts <a name="CloudwatchOtelEnrichmentTimeouts" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichmentTimeouts;

CloudwatchOtelEnrichmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#create CloudwatchOtelEnrichment#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#delete CloudwatchOtelEnrichment#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchOtelEnrichmentExcludeFilterList <a name="CloudwatchOtelEnrichmentExcludeFilterList" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichmentExcludeFilterList;

new CloudwatchOtelEnrichmentExcludeFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.get"></a>

```java
public CloudwatchOtelEnrichmentExcludeFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchOtelEnrichmentExcludeFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>>

---


### CloudwatchOtelEnrichmentExcludeFilterOutputReference <a name="CloudwatchOtelEnrichmentExcludeFilterOutputReference" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference;

new CloudwatchOtelEnrichmentExcludeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.resetMetricNames">resetMetricNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricNames` <a name="resetMetricNames" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.resetMetricNames"></a>

```java
public void resetMetricNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.metricNamesInput">metricNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.metricNames">metricNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricNamesInput`<sup>Optional</sup> <a name="metricNamesInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.metricNamesInput"></a>

```java
public java.util.List<java.lang.String> getMetricNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `metricNames`<sup>Required</sup> <a name="metricNames" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.metricNames"></a>

```java
public java.util.List<java.lang.String> getMetricNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchOtelEnrichmentExcludeFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>

---


### CloudwatchOtelEnrichmentIncludeFilterList <a name="CloudwatchOtelEnrichmentIncludeFilterList" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichmentIncludeFilterList;

new CloudwatchOtelEnrichmentIncludeFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.get"></a>

```java
public CloudwatchOtelEnrichmentIncludeFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudwatchOtelEnrichmentIncludeFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>>

---


### CloudwatchOtelEnrichmentIncludeFilterOutputReference <a name="CloudwatchOtelEnrichmentIncludeFilterOutputReference" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference;

new CloudwatchOtelEnrichmentIncludeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.resetMetricNames">resetMetricNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricNames` <a name="resetMetricNames" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.resetMetricNames"></a>

```java
public void resetMetricNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.metricNamesInput">metricNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.metricNames">metricNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricNamesInput`<sup>Optional</sup> <a name="metricNamesInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.metricNamesInput"></a>

```java
public java.util.List<java.lang.String> getMetricNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `metricNames`<sup>Required</sup> <a name="metricNames" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.metricNames"></a>

```java
public java.util.List<java.lang.String> getMetricNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchOtelEnrichmentIncludeFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>

---


### CloudwatchOtelEnrichmentTimeoutsOutputReference <a name="CloudwatchOtelEnrichmentTimeoutsOutputReference" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.cloudwatch_otel_enrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference;

new CloudwatchOtelEnrichmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudwatchOtelEnrichmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a>

---



