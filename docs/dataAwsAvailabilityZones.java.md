# `dataAwsAvailabilityZones` Submodule <a name="`dataAwsAvailabilityZones` Submodule" id="@cdktn/provider-aws.dataAwsAvailabilityZones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAvailabilityZones <a name="DataAwsAvailabilityZones" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones aws_availability_zones}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_availability_zones.DataAwsAvailabilityZones;

DataAwsAvailabilityZones.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .allAvailabilityZones(java.lang.Boolean|IResolvable)
//  .excludeNames(java.util.List<java.lang.String>)
//  .excludeZoneIds(java.util.List<java.lang.String>)
//  .filter(IResolvable|java.util.List<DataAwsAvailabilityZonesFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(DataAwsAvailabilityZonesTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.allAvailabilityZones">allAvailabilityZones</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#all_availability_zones DataAwsAvailabilityZones#all_availability_zones}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.excludeNames">excludeNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#exclude_names DataAwsAvailabilityZones#exclude_names}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.excludeZoneIds">excludeZoneIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#exclude_zone_ids DataAwsAvailabilityZones#exclude_zone_ids}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#id DataAwsAvailabilityZones#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#state DataAwsAvailabilityZones#state}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allAvailabilityZones`<sup>Optional</sup> <a name="allAvailabilityZones" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.allAvailabilityZones"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#all_availability_zones DataAwsAvailabilityZones#all_availability_zones}.

---

##### `excludeNames`<sup>Optional</sup> <a name="excludeNames" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.excludeNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#exclude_names DataAwsAvailabilityZones#exclude_names}.

---

##### `excludeZoneIds`<sup>Optional</sup> <a name="excludeZoneIds" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.excludeZoneIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#exclude_zone_ids DataAwsAvailabilityZones#exclude_zone_ids}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#filter DataAwsAvailabilityZones#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#id DataAwsAvailabilityZones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#region DataAwsAvailabilityZones#region}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#state DataAwsAvailabilityZones#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#timeouts DataAwsAvailabilityZones#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetAllAvailabilityZones">resetAllAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetExcludeNames">resetExcludeNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetExcludeZoneIds">resetExcludeZoneIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsAvailabilityZonesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putTimeouts"></a>

```java
public void putTimeouts(DataAwsAvailabilityZonesTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a>

---

##### `resetAllAvailabilityZones` <a name="resetAllAvailabilityZones" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetAllAvailabilityZones"></a>

```java
public void resetAllAvailabilityZones()
```

##### `resetExcludeNames` <a name="resetExcludeNames" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetExcludeNames"></a>

```java
public void resetExcludeNames()
```

##### `resetExcludeZoneIds` <a name="resetExcludeZoneIds" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetExcludeZoneIds"></a>

```java
public void resetExcludeZoneIds()
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetState` <a name="resetState" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsAvailabilityZones resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_availability_zones.DataAwsAvailabilityZones;

DataAwsAvailabilityZones.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_availability_zones.DataAwsAvailabilityZones;

DataAwsAvailabilityZones.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_availability_zones.DataAwsAvailabilityZones;

DataAwsAvailabilityZones.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_availability_zones.DataAwsAvailabilityZones;

DataAwsAvailabilityZones.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsAvailabilityZones.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsAvailabilityZones resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsAvailabilityZones to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsAvailabilityZones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsAvailabilityZones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList">DataAwsAvailabilityZonesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.groupNames">groupNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.names">names</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference">DataAwsAvailabilityZonesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.zoneIds">zoneIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.allAvailabilityZonesInput">allAvailabilityZonesInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeNamesInput">excludeNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeZoneIdsInput">excludeZoneIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.allAvailabilityZones">allAvailabilityZones</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeNames">excludeNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeZoneIds">excludeZoneIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.filter"></a>

```java
public DataAwsAvailabilityZonesFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList">DataAwsAvailabilityZonesFilterList</a>

---

##### `groupNames`<sup>Required</sup> <a name="groupNames" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.groupNames"></a>

```java
public java.util.List<java.lang.String> getGroupNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.names"></a>

```java
public java.util.List<java.lang.String> getNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.timeouts"></a>

```java
public DataAwsAvailabilityZonesTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference">DataAwsAvailabilityZonesTimeoutsOutputReference</a>

---

##### `zoneIds`<sup>Required</sup> <a name="zoneIds" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.zoneIds"></a>

```java
public java.util.List<java.lang.String> getZoneIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allAvailabilityZonesInput`<sup>Optional</sup> <a name="allAvailabilityZonesInput" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.allAvailabilityZonesInput"></a>

```java
public java.lang.Boolean|IResolvable getAllAvailabilityZonesInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeNamesInput`<sup>Optional</sup> <a name="excludeNamesInput" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeNamesInput"></a>

```java
public java.util.List<java.lang.String> getExcludeNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeZoneIdsInput`<sup>Optional</sup> <a name="excludeZoneIdsInput" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeZoneIdsInput"></a>

```java
public java.util.List<java.lang.String> getExcludeZoneIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsAvailabilityZonesFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.timeoutsInput"></a>

```java
public IResolvable|DataAwsAvailabilityZonesTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a>

---

##### `allAvailabilityZones`<sup>Required</sup> <a name="allAvailabilityZones" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.allAvailabilityZones"></a>

```java
public java.lang.Boolean|IResolvable getAllAvailabilityZones();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `excludeNames`<sup>Required</sup> <a name="excludeNames" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeNames"></a>

```java
public java.util.List<java.lang.String> getExcludeNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludeZoneIds`<sup>Required</sup> <a name="excludeZoneIds" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.excludeZoneIds"></a>

```java
public java.util.List<java.lang.String> getExcludeZoneIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZones.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAvailabilityZonesConfig <a name="DataAwsAvailabilityZonesConfig" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_availability_zones.DataAwsAvailabilityZonesConfig;

DataAwsAvailabilityZonesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .allAvailabilityZones(java.lang.Boolean|IResolvable)
//  .excludeNames(java.util.List<java.lang.String>)
//  .excludeZoneIds(java.util.List<java.lang.String>)
//  .filter(IResolvable|java.util.List<DataAwsAvailabilityZonesFilter>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .state(java.lang.String)
//  .timeouts(DataAwsAvailabilityZonesTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.allAvailabilityZones">allAvailabilityZones</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#all_availability_zones DataAwsAvailabilityZones#all_availability_zones}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.excludeNames">excludeNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#exclude_names DataAwsAvailabilityZones#exclude_names}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.excludeZoneIds">excludeZoneIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#exclude_zone_ids DataAwsAvailabilityZones#exclude_zone_ids}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#id DataAwsAvailabilityZones#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#state DataAwsAvailabilityZones#state}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allAvailabilityZones`<sup>Optional</sup> <a name="allAvailabilityZones" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.allAvailabilityZones"></a>

```java
public java.lang.Boolean|IResolvable getAllAvailabilityZones();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#all_availability_zones DataAwsAvailabilityZones#all_availability_zones}.

---

##### `excludeNames`<sup>Optional</sup> <a name="excludeNames" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.excludeNames"></a>

```java
public java.util.List<java.lang.String> getExcludeNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#exclude_names DataAwsAvailabilityZones#exclude_names}.

---

##### `excludeZoneIds`<sup>Optional</sup> <a name="excludeZoneIds" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.excludeZoneIds"></a>

```java
public java.util.List<java.lang.String> getExcludeZoneIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#exclude_zone_ids DataAwsAvailabilityZones#exclude_zone_ids}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsAvailabilityZonesFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#filter DataAwsAvailabilityZones#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#id DataAwsAvailabilityZones#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#region DataAwsAvailabilityZones#region}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#state DataAwsAvailabilityZones#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesConfig.property.timeouts"></a>

```java
public DataAwsAvailabilityZonesTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#timeouts DataAwsAvailabilityZones#timeouts}

---

### DataAwsAvailabilityZonesFilter <a name="DataAwsAvailabilityZonesFilter" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_availability_zones.DataAwsAvailabilityZonesFilter;

DataAwsAvailabilityZonesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#name DataAwsAvailabilityZones#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#values DataAwsAvailabilityZones#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#name DataAwsAvailabilityZones#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#values DataAwsAvailabilityZones#values}.

---

### DataAwsAvailabilityZonesTimeouts <a name="DataAwsAvailabilityZonesTimeouts" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_availability_zones.DataAwsAvailabilityZonesTimeouts;

DataAwsAvailabilityZonesTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#read DataAwsAvailabilityZones#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/data-sources/availability_zones#read DataAwsAvailabilityZones#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsAvailabilityZonesFilterList <a name="DataAwsAvailabilityZonesFilterList" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_availability_zones.DataAwsAvailabilityZonesFilterList;

new DataAwsAvailabilityZonesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.get"></a>

```java
public DataAwsAvailabilityZonesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsAvailabilityZonesFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>>

---


### DataAwsAvailabilityZonesFilterOutputReference <a name="DataAwsAvailabilityZonesFilterOutputReference" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_availability_zones.DataAwsAvailabilityZonesFilterOutputReference;

new DataAwsAvailabilityZonesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsAvailabilityZonesFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesFilter">DataAwsAvailabilityZonesFilter</a>

---


### DataAwsAvailabilityZonesTimeoutsOutputReference <a name="DataAwsAvailabilityZonesTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_availability_zones.DataAwsAvailabilityZonesTimeoutsOutputReference;

new DataAwsAvailabilityZonesTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsAvailabilityZonesTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsAvailabilityZones.DataAwsAvailabilityZonesTimeouts">DataAwsAvailabilityZonesTimeouts</a>

---



