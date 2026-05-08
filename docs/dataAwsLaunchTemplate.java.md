# `dataAwsLaunchTemplate` Submodule <a name="`dataAwsLaunchTemplate` Submodule" id="@cdktn/provider-aws.dataAwsLaunchTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLaunchTemplate <a name="DataAwsLaunchTemplate" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template aws_launch_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplate;

DataAwsLaunchTemplate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsLaunchTemplateFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsLaunchTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#id DataAwsLaunchTemplate#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#name DataAwsLaunchTemplate#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#tags DataAwsLaunchTemplate#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#filter DataAwsLaunchTemplate#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#id DataAwsLaunchTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#name DataAwsLaunchTemplate#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#region DataAwsLaunchTemplate#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#tags DataAwsLaunchTemplate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#timeouts DataAwsLaunchTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsLaunchTemplateFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putTimeouts"></a>

```java
public void putTimeouts(DataAwsLaunchTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsLaunchTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplate;

DataAwsLaunchTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplate;

DataAwsLaunchTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplate;

DataAwsLaunchTemplate.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplate;

DataAwsLaunchTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsLaunchTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsLaunchTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsLaunchTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsLaunchTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsLaunchTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList">DataAwsLaunchTemplateBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList">DataAwsLaunchTemplateCapacityReservationSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.cpuOptions">cpuOptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList">DataAwsLaunchTemplateCpuOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList">DataAwsLaunchTemplateCreditSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.defaultVersion">defaultVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.disableApiStop">disableApiStop</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.disableApiTermination">disableApiTermination</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.ebsOptimized">ebsOptimized</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList">DataAwsLaunchTemplateEnclaveOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList">DataAwsLaunchTemplateFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.hibernationOptions">hibernationOptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList">DataAwsLaunchTemplateHibernationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList">DataAwsLaunchTemplateIamInstanceProfileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceMarketOptions">instanceMarketOptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList">DataAwsLaunchTemplateInstanceMarketOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList">DataAwsLaunchTemplateInstanceRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceType">instanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.kernelId">kernelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.latestVersion">latestVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.licenseSpecification">licenseSpecification</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList">DataAwsLaunchTemplateLicenseSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.maintenanceOptions">maintenanceOptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList">DataAwsLaunchTemplateMaintenanceOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList">DataAwsLaunchTemplateMetadataOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.monitoring">monitoring</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList">DataAwsLaunchTemplateMonitoringList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList">DataAwsLaunchTemplateNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.networkPerformanceOptions">networkPerformanceOptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList">DataAwsLaunchTemplateNetworkPerformanceOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList">DataAwsLaunchTemplatePlacementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList">DataAwsLaunchTemplatePrivateDnsNameOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.ramDiskId">ramDiskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.secondaryInterfaces">secondaryInterfaces</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList">DataAwsLaunchTemplateSecondaryInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.securityGroupNames">securityGroupNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList">DataAwsLaunchTemplateTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference">DataAwsLaunchTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.blockDeviceMappings"></a>

```java
public DataAwsLaunchTemplateBlockDeviceMappingsList getBlockDeviceMappings();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList">DataAwsLaunchTemplateBlockDeviceMappingsList</a>

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.capacityReservationSpecification"></a>

```java
public DataAwsLaunchTemplateCapacityReservationSpecificationList getCapacityReservationSpecification();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList">DataAwsLaunchTemplateCapacityReservationSpecificationList</a>

---

##### `cpuOptions`<sup>Required</sup> <a name="cpuOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.cpuOptions"></a>

```java
public DataAwsLaunchTemplateCpuOptionsList getCpuOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList">DataAwsLaunchTemplateCpuOptionsList</a>

---

##### `creditSpecification`<sup>Required</sup> <a name="creditSpecification" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.creditSpecification"></a>

```java
public DataAwsLaunchTemplateCreditSpecificationList getCreditSpecification();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList">DataAwsLaunchTemplateCreditSpecificationList</a>

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.defaultVersion"></a>

```java
public java.lang.Number getDefaultVersion();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableApiStop`<sup>Required</sup> <a name="disableApiStop" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.disableApiStop"></a>

```java
public IResolvable getDisableApiStop();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `disableApiTermination`<sup>Required</sup> <a name="disableApiTermination" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.disableApiTermination"></a>

```java
public IResolvable getDisableApiTermination();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.ebsOptimized"></a>

```java
public java.lang.String getEbsOptimized();
```

- *Type:* java.lang.String

---

##### `enclaveOptions`<sup>Required</sup> <a name="enclaveOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.enclaveOptions"></a>

```java
public DataAwsLaunchTemplateEnclaveOptionsList getEnclaveOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList">DataAwsLaunchTemplateEnclaveOptionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.filter"></a>

```java
public DataAwsLaunchTemplateFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList">DataAwsLaunchTemplateFilterList</a>

---

##### `hibernationOptions`<sup>Required</sup> <a name="hibernationOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.hibernationOptions"></a>

```java
public DataAwsLaunchTemplateHibernationOptionsList getHibernationOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList">DataAwsLaunchTemplateHibernationOptionsList</a>

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.iamInstanceProfile"></a>

```java
public DataAwsLaunchTemplateIamInstanceProfileList getIamInstanceProfile();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList">DataAwsLaunchTemplateIamInstanceProfileList</a>

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `instanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceInitiatedShutdownBehavior"></a>

```java
public java.lang.String getInstanceInitiatedShutdownBehavior();
```

- *Type:* java.lang.String

---

##### `instanceMarketOptions`<sup>Required</sup> <a name="instanceMarketOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceMarketOptions"></a>

```java
public DataAwsLaunchTemplateInstanceMarketOptionsList getInstanceMarketOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList">DataAwsLaunchTemplateInstanceMarketOptionsList</a>

---

##### `instanceRequirements`<sup>Required</sup> <a name="instanceRequirements" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceRequirements"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsList getInstanceRequirements();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList">DataAwsLaunchTemplateInstanceRequirementsList</a>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.instanceType"></a>

```java
public java.lang.String getInstanceType();
```

- *Type:* java.lang.String

---

##### `kernelId`<sup>Required</sup> <a name="kernelId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.kernelId"></a>

```java
public java.lang.String getKernelId();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.latestVersion"></a>

```java
public java.lang.Number getLatestVersion();
```

- *Type:* java.lang.Number

---

##### `licenseSpecification`<sup>Required</sup> <a name="licenseSpecification" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.licenseSpecification"></a>

```java
public DataAwsLaunchTemplateLicenseSpecificationList getLicenseSpecification();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList">DataAwsLaunchTemplateLicenseSpecificationList</a>

---

##### `maintenanceOptions`<sup>Required</sup> <a name="maintenanceOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.maintenanceOptions"></a>

```java
public DataAwsLaunchTemplateMaintenanceOptionsList getMaintenanceOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList">DataAwsLaunchTemplateMaintenanceOptionsList</a>

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.metadataOptions"></a>

```java
public DataAwsLaunchTemplateMetadataOptionsList getMetadataOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList">DataAwsLaunchTemplateMetadataOptionsList</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.monitoring"></a>

```java
public DataAwsLaunchTemplateMonitoringList getMonitoring();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList">DataAwsLaunchTemplateMonitoringList</a>

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.networkInterfaces"></a>

```java
public DataAwsLaunchTemplateNetworkInterfacesList getNetworkInterfaces();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList">DataAwsLaunchTemplateNetworkInterfacesList</a>

---

##### `networkPerformanceOptions`<sup>Required</sup> <a name="networkPerformanceOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.networkPerformanceOptions"></a>

```java
public DataAwsLaunchTemplateNetworkPerformanceOptionsList getNetworkPerformanceOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList">DataAwsLaunchTemplateNetworkPerformanceOptionsList</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.placement"></a>

```java
public DataAwsLaunchTemplatePlacementList getPlacement();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList">DataAwsLaunchTemplatePlacementList</a>

---

##### `privateDnsNameOptions`<sup>Required</sup> <a name="privateDnsNameOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.privateDnsNameOptions"></a>

```java
public DataAwsLaunchTemplatePrivateDnsNameOptionsList getPrivateDnsNameOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList">DataAwsLaunchTemplatePrivateDnsNameOptionsList</a>

---

##### `ramDiskId`<sup>Required</sup> <a name="ramDiskId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.ramDiskId"></a>

```java
public java.lang.String getRamDiskId();
```

- *Type:* java.lang.String

---

##### `secondaryInterfaces`<sup>Required</sup> <a name="secondaryInterfaces" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.secondaryInterfaces"></a>

```java
public DataAwsLaunchTemplateSecondaryInterfacesList getSecondaryInterfaces();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList">DataAwsLaunchTemplateSecondaryInterfacesList</a>

---

##### `securityGroupNames`<sup>Required</sup> <a name="securityGroupNames" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.securityGroupNames"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tagSpecifications"></a>

```java
public DataAwsLaunchTemplateTagSpecificationsList getTagSpecifications();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList">DataAwsLaunchTemplateTagSpecificationsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.timeouts"></a>

```java
public DataAwsLaunchTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference">DataAwsLaunchTemplateTimeoutsOutputReference</a>

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.vpcSecurityGroupIds"></a>

```java
public java.util.List<java.lang.String> getVpcSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsLaunchTemplateFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.timeoutsInput"></a>

```java
public IResolvable|DataAwsLaunchTemplateTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLaunchTemplateBlockDeviceMappings <a name="DataAwsLaunchTemplateBlockDeviceMappings" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappings.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateBlockDeviceMappings;

DataAwsLaunchTemplateBlockDeviceMappings.builder()
    .build();
```


### DataAwsLaunchTemplateBlockDeviceMappingsEbs <a name="DataAwsLaunchTemplateBlockDeviceMappingsEbs" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateBlockDeviceMappingsEbs;

DataAwsLaunchTemplateBlockDeviceMappingsEbs.builder()
    .build();
```


### DataAwsLaunchTemplateCapacityReservationSpecification <a name="DataAwsLaunchTemplateCapacityReservationSpecification" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecification.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateCapacityReservationSpecification;

DataAwsLaunchTemplateCapacityReservationSpecification.builder()
    .build();
```


### DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget <a name="DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget;

DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget.builder()
    .build();
```


### DataAwsLaunchTemplateConfig <a name="DataAwsLaunchTemplateConfig" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateConfig;

DataAwsLaunchTemplateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsLaunchTemplateFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(DataAwsLaunchTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#id DataAwsLaunchTemplate#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#name DataAwsLaunchTemplate#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#tags DataAwsLaunchTemplate#tags}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsLaunchTemplateFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#filter DataAwsLaunchTemplate#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#id DataAwsLaunchTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#name DataAwsLaunchTemplate#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#region DataAwsLaunchTemplate#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#tags DataAwsLaunchTemplate#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateConfig.property.timeouts"></a>

```java
public DataAwsLaunchTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#timeouts DataAwsLaunchTemplate#timeouts}

---

### DataAwsLaunchTemplateCpuOptions <a name="DataAwsLaunchTemplateCpuOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateCpuOptions;

DataAwsLaunchTemplateCpuOptions.builder()
    .build();
```


### DataAwsLaunchTemplateCreditSpecification <a name="DataAwsLaunchTemplateCreditSpecification" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecification.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateCreditSpecification;

DataAwsLaunchTemplateCreditSpecification.builder()
    .build();
```


### DataAwsLaunchTemplateEnclaveOptions <a name="DataAwsLaunchTemplateEnclaveOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateEnclaveOptions;

DataAwsLaunchTemplateEnclaveOptions.builder()
    .build();
```


### DataAwsLaunchTemplateFilter <a name="DataAwsLaunchTemplateFilter" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateFilter;

DataAwsLaunchTemplateFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#name DataAwsLaunchTemplate#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#values DataAwsLaunchTemplate#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#name DataAwsLaunchTemplate#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#values DataAwsLaunchTemplate#values}.

---

### DataAwsLaunchTemplateHibernationOptions <a name="DataAwsLaunchTemplateHibernationOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateHibernationOptions;

DataAwsLaunchTemplateHibernationOptions.builder()
    .build();
```


### DataAwsLaunchTemplateIamInstanceProfile <a name="DataAwsLaunchTemplateIamInstanceProfile" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfile.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateIamInstanceProfile;

DataAwsLaunchTemplateIamInstanceProfile.builder()
    .build();
```


### DataAwsLaunchTemplateInstanceMarketOptions <a name="DataAwsLaunchTemplateInstanceMarketOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceMarketOptions;

DataAwsLaunchTemplateInstanceMarketOptions.builder()
    .build();
```


### DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions <a name="DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions;

DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions.builder()
    .build();
```


### DataAwsLaunchTemplateInstanceRequirements <a name="DataAwsLaunchTemplateInstanceRequirements" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirements.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirements;

DataAwsLaunchTemplateInstanceRequirements.builder()
    .build();
```


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount;

DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount.builder()
    .build();
```


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib;

DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib.builder()
    .build();
```


### DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps <a name="DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps;

DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps.builder()
    .build();
```


### DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu;

DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu.builder()
    .build();
```


### DataAwsLaunchTemplateInstanceRequirementsMemoryMib <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryMib" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsMemoryMib;

DataAwsLaunchTemplateInstanceRequirementsMemoryMib.builder()
    .build();
```


### DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps;

DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps.builder()
    .build();
```


### DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount;

DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount.builder()
    .build();
```


### DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb <a name="DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb;

DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb.builder()
    .build();
```


### DataAwsLaunchTemplateInstanceRequirementsVcpuCount <a name="DataAwsLaunchTemplateInstanceRequirementsVcpuCount" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsVcpuCount;

DataAwsLaunchTemplateInstanceRequirementsVcpuCount.builder()
    .build();
```


### DataAwsLaunchTemplateLicenseSpecification <a name="DataAwsLaunchTemplateLicenseSpecification" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecification.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateLicenseSpecification;

DataAwsLaunchTemplateLicenseSpecification.builder()
    .build();
```


### DataAwsLaunchTemplateMaintenanceOptions <a name="DataAwsLaunchTemplateMaintenanceOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateMaintenanceOptions;

DataAwsLaunchTemplateMaintenanceOptions.builder()
    .build();
```


### DataAwsLaunchTemplateMetadataOptions <a name="DataAwsLaunchTemplateMetadataOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateMetadataOptions;

DataAwsLaunchTemplateMetadataOptions.builder()
    .build();
```


### DataAwsLaunchTemplateMonitoring <a name="DataAwsLaunchTemplateMonitoring" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoring.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateMonitoring;

DataAwsLaunchTemplateMonitoring.builder()
    .build();
```


### DataAwsLaunchTemplateNetworkInterfaces <a name="DataAwsLaunchTemplateNetworkInterfaces" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfaces.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateNetworkInterfaces;

DataAwsLaunchTemplateNetworkInterfaces.builder()
    .build();
```


### DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification <a name="DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification;

DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification.builder()
    .build();
```


### DataAwsLaunchTemplateNetworkPerformanceOptions <a name="DataAwsLaunchTemplateNetworkPerformanceOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateNetworkPerformanceOptions;

DataAwsLaunchTemplateNetworkPerformanceOptions.builder()
    .build();
```


### DataAwsLaunchTemplatePlacement <a name="DataAwsLaunchTemplatePlacement" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacement.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplatePlacement;

DataAwsLaunchTemplatePlacement.builder()
    .build();
```


### DataAwsLaunchTemplatePrivateDnsNameOptions <a name="DataAwsLaunchTemplatePrivateDnsNameOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptions.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplatePrivateDnsNameOptions;

DataAwsLaunchTemplatePrivateDnsNameOptions.builder()
    .build();
```


### DataAwsLaunchTemplateSecondaryInterfaces <a name="DataAwsLaunchTemplateSecondaryInterfaces" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfaces.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateSecondaryInterfaces;

DataAwsLaunchTemplateSecondaryInterfaces.builder()
    .build();
```


### DataAwsLaunchTemplateTagSpecifications <a name="DataAwsLaunchTemplateTagSpecifications" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecifications.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateTagSpecifications;

DataAwsLaunchTemplateTagSpecifications.builder()
    .build();
```


### DataAwsLaunchTemplateTimeouts <a name="DataAwsLaunchTemplateTimeouts" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateTimeouts;

DataAwsLaunchTemplateTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#read DataAwsLaunchTemplate#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/launch_template#read DataAwsLaunchTemplate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsLaunchTemplateBlockDeviceMappingsEbsList <a name="DataAwsLaunchTemplateBlockDeviceMappingsEbsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateBlockDeviceMappingsEbsList;

new DataAwsLaunchTemplateBlockDeviceMappingsEbsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.get"></a>

```java
public DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference <a name="DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference;

new DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeInitializationRate">volumeInitializationRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs">DataAwsLaunchTemplateBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.String getDeleteOnTermination();
```

- *Type:* java.lang.String

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```java
public java.lang.String getEncrypted();
```

- *Type:* java.lang.String

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```java
public java.lang.Number getIops();
```

- *Type:* java.lang.Number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```java
public java.lang.Number getThroughput();
```

- *Type:* java.lang.Number

---

##### `volumeInitializationRate`<sup>Required</sup> <a name="volumeInitializationRate" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeInitializationRate"></a>

```java
public java.lang.Number getVolumeInitializationRate();
```

- *Type:* java.lang.Number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```java
public java.lang.Number getVolumeSize();
```

- *Type:* java.lang.Number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```java
public java.lang.String getVolumeType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateBlockDeviceMappingsEbs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbs">DataAwsLaunchTemplateBlockDeviceMappingsEbs</a>

---


### DataAwsLaunchTemplateBlockDeviceMappingsList <a name="DataAwsLaunchTemplateBlockDeviceMappingsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateBlockDeviceMappingsList;

new DataAwsLaunchTemplateBlockDeviceMappingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.get"></a>

```java
public DataAwsLaunchTemplateBlockDeviceMappingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateBlockDeviceMappingsOutputReference <a name="DataAwsLaunchTemplateBlockDeviceMappingsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference;

new DataAwsLaunchTemplateBlockDeviceMappingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList">DataAwsLaunchTemplateBlockDeviceMappingsEbsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappings">DataAwsLaunchTemplateBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.deviceName"></a>

```java
public java.lang.String getDeviceName();
```

- *Type:* java.lang.String

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.ebs"></a>

```java
public DataAwsLaunchTemplateBlockDeviceMappingsEbsList getEbs();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsEbsList">DataAwsLaunchTemplateBlockDeviceMappingsEbsList</a>

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.noDevice"></a>

```java
public java.lang.String getNoDevice();
```

- *Type:* java.lang.String

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.virtualName"></a>

```java
public java.lang.String getVirtualName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappingsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateBlockDeviceMappings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateBlockDeviceMappings">DataAwsLaunchTemplateBlockDeviceMappings</a>

---


### DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList <a name="DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList;

new DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.get"></a>

```java
public DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference;

new DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacityReservationResourceGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

---

##### `capacityReservationResourceGroupArn`<sup>Required</sup> <a name="capacityReservationResourceGroupArn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```java
public java.lang.String getCapacityReservationResourceGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget">DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget</a>

---


### DataAwsLaunchTemplateCapacityReservationSpecificationList <a name="DataAwsLaunchTemplateCapacityReservationSpecificationList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateCapacityReservationSpecificationList;

new DataAwsLaunchTemplateCapacityReservationSpecificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.get"></a>

```java
public DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference <a name="DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference;

new DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList">DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecification">DataAwsLaunchTemplateCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityReservationPreference`<sup>Required</sup> <a name="capacityReservationPreference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```java
public java.lang.String getCapacityReservationPreference();
```

- *Type:* java.lang.String

---

##### `capacityReservationTarget`<sup>Required</sup> <a name="capacityReservationTarget" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```java
public DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList getCapacityReservationTarget();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList">DataAwsLaunchTemplateCapacityReservationSpecificationCapacityReservationTargetList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateCapacityReservationSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCapacityReservationSpecification">DataAwsLaunchTemplateCapacityReservationSpecification</a>

---


### DataAwsLaunchTemplateCpuOptionsList <a name="DataAwsLaunchTemplateCpuOptionsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateCpuOptionsList;

new DataAwsLaunchTemplateCpuOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.get"></a>

```java
public DataAwsLaunchTemplateCpuOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateCpuOptionsOutputReference <a name="DataAwsLaunchTemplateCpuOptionsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateCpuOptionsOutputReference;

new DataAwsLaunchTemplateCpuOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.amdSevSnp">amdSevSnp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.coreCount">coreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.nestedVirtualization">nestedVirtualization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptions">DataAwsLaunchTemplateCpuOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amdSevSnp`<sup>Required</sup> <a name="amdSevSnp" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.amdSevSnp"></a>

```java
public java.lang.String getAmdSevSnp();
```

- *Type:* java.lang.String

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.coreCount"></a>

```java
public java.lang.Number getCoreCount();
```

- *Type:* java.lang.Number

---

##### `nestedVirtualization`<sup>Required</sup> <a name="nestedVirtualization" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.nestedVirtualization"></a>

```java
public java.lang.String getNestedVirtualization();
```

- *Type:* java.lang.String

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.threadsPerCore"></a>

```java
public java.lang.Number getThreadsPerCore();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateCpuOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCpuOptions">DataAwsLaunchTemplateCpuOptions</a>

---


### DataAwsLaunchTemplateCreditSpecificationList <a name="DataAwsLaunchTemplateCreditSpecificationList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateCreditSpecificationList;

new DataAwsLaunchTemplateCreditSpecificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.get"></a>

```java
public DataAwsLaunchTemplateCreditSpecificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateCreditSpecificationOutputReference <a name="DataAwsLaunchTemplateCreditSpecificationOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateCreditSpecificationOutputReference;

new DataAwsLaunchTemplateCreditSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.cpuCredits">cpuCredits</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecification">DataAwsLaunchTemplateCreditSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuCredits`<sup>Required</sup> <a name="cpuCredits" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.cpuCredits"></a>

```java
public java.lang.String getCpuCredits();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateCreditSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateCreditSpecification">DataAwsLaunchTemplateCreditSpecification</a>

---


### DataAwsLaunchTemplateEnclaveOptionsList <a name="DataAwsLaunchTemplateEnclaveOptionsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateEnclaveOptionsList;

new DataAwsLaunchTemplateEnclaveOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.get"></a>

```java
public DataAwsLaunchTemplateEnclaveOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateEnclaveOptionsOutputReference <a name="DataAwsLaunchTemplateEnclaveOptionsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateEnclaveOptionsOutputReference;

new DataAwsLaunchTemplateEnclaveOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptions">DataAwsLaunchTemplateEnclaveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateEnclaveOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateEnclaveOptions">DataAwsLaunchTemplateEnclaveOptions</a>

---


### DataAwsLaunchTemplateFilterList <a name="DataAwsLaunchTemplateFilterList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateFilterList;

new DataAwsLaunchTemplateFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.get"></a>

```java
public DataAwsLaunchTemplateFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsLaunchTemplateFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>>

---


### DataAwsLaunchTemplateFilterOutputReference <a name="DataAwsLaunchTemplateFilterOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateFilterOutputReference;

new DataAwsLaunchTemplateFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsLaunchTemplateFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateFilter">DataAwsLaunchTemplateFilter</a>

---


### DataAwsLaunchTemplateHibernationOptionsList <a name="DataAwsLaunchTemplateHibernationOptionsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateHibernationOptionsList;

new DataAwsLaunchTemplateHibernationOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.get"></a>

```java
public DataAwsLaunchTemplateHibernationOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateHibernationOptionsOutputReference <a name="DataAwsLaunchTemplateHibernationOptionsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateHibernationOptionsOutputReference;

new DataAwsLaunchTemplateHibernationOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.configured">configured</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptions">DataAwsLaunchTemplateHibernationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.configured"></a>

```java
public IResolvable getConfigured();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateHibernationOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateHibernationOptions">DataAwsLaunchTemplateHibernationOptions</a>

---


### DataAwsLaunchTemplateIamInstanceProfileList <a name="DataAwsLaunchTemplateIamInstanceProfileList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateIamInstanceProfileList;

new DataAwsLaunchTemplateIamInstanceProfileList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.get"></a>

```java
public DataAwsLaunchTemplateIamInstanceProfileOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateIamInstanceProfileOutputReference <a name="DataAwsLaunchTemplateIamInstanceProfileOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateIamInstanceProfileOutputReference;

new DataAwsLaunchTemplateIamInstanceProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfile">DataAwsLaunchTemplateIamInstanceProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfileOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateIamInstanceProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateIamInstanceProfile">DataAwsLaunchTemplateIamInstanceProfile</a>

---


### DataAwsLaunchTemplateInstanceMarketOptionsList <a name="DataAwsLaunchTemplateInstanceMarketOptionsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceMarketOptionsList;

new DataAwsLaunchTemplateInstanceMarketOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.get"></a>

```java
public DataAwsLaunchTemplateInstanceMarketOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateInstanceMarketOptionsOutputReference <a name="DataAwsLaunchTemplateInstanceMarketOptionsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference;

new DataAwsLaunchTemplateInstanceMarketOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.marketType">marketType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions">spotOptions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList">DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptions">DataAwsLaunchTemplateInstanceMarketOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `marketType`<sup>Required</sup> <a name="marketType" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.marketType"></a>

```java
public java.lang.String getMarketType();
```

- *Type:* java.lang.String

---

##### `spotOptions`<sup>Required</sup> <a name="spotOptions" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.spotOptions"></a>

```java
public DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList getSpotOptions();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList">DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateInstanceMarketOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptions">DataAwsLaunchTemplateInstanceMarketOptions</a>

---


### DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList <a name="DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList;

new DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.get"></a>

```java
public DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference <a name="DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference;

new DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior">instanceInterruptionBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice">maxPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType">spotInstanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil">validUntil</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions">DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `blockDurationMinutes`<sup>Required</sup> <a name="blockDurationMinutes" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes"></a>

```java
public java.lang.Number getBlockDurationMinutes();
```

- *Type:* java.lang.Number

---

##### `instanceInterruptionBehavior`<sup>Required</sup> <a name="instanceInterruptionBehavior" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```java
public java.lang.String getInstanceInterruptionBehavior();
```

- *Type:* java.lang.String

---

##### `maxPrice`<sup>Required</sup> <a name="maxPrice" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice"></a>

```java
public java.lang.String getMaxPrice();
```

- *Type:* java.lang.String

---

##### `spotInstanceType`<sup>Required</sup> <a name="spotInstanceType" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType"></a>

```java
public java.lang.String getSpotInstanceType();
```

- *Type:* java.lang.String

---

##### `validUntil`<sup>Required</sup> <a name="validUntil" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil"></a>

```java
public java.lang.String getValidUntil();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions">DataAwsLaunchTemplateInstanceMarketOptionsSpotOptions</a>

---


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList;

new DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.get"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference;

new DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount">DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount">DataAwsLaunchTemplateInstanceRequirementsAcceleratorCount</a>

---


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList;

new DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.get"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference;

new DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib">DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMib</a>

---


### DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList <a name="DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList;

new DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.get"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference;

new DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### DataAwsLaunchTemplateInstanceRequirementsList <a name="DataAwsLaunchTemplateInstanceRequirementsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsList;

new DataAwsLaunchTemplateInstanceRequirementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.get"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList;

new DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.get"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference;

new DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu">DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu">DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpu</a>

---


### DataAwsLaunchTemplateInstanceRequirementsMemoryMibList <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryMibList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList;

new DataAwsLaunchTemplateInstanceRequirementsMemoryMibList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.get"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference;

new DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib">DataAwsLaunchTemplateInstanceRequirementsMemoryMib</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsMemoryMib getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMib">DataAwsLaunchTemplateInstanceRequirementsMemoryMib</a>

---


### DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList;

new DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.get"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference;

new DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps">DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps">DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbps</a>

---


### DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList;

new DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.get"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference;

new DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount">DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount">DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCount</a>

---


### DataAwsLaunchTemplateInstanceRequirementsOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsOutputReference;

new DataAwsLaunchTemplateInstanceRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList">DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturers">acceleratorManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNames">acceleratorNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib">acceleratorTotalMemoryMib</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList">DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypes">acceleratorTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes">allowedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.bareMetal">bareMetal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">baselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList">DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformance">burstablePerformance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturers">cpuManufacturers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerations">instanceGenerations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.localStorage">localStorage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypes">localStorageTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice">maxSpotPriceAsPercentageOfOptimalOnDemandPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpu">memoryGibPerVcpu</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList">DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.memoryMib">memoryMib</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList">DataAwsLaunchTemplateInstanceRequirementsMemoryMibList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.networkBandwidthGbps">networkBandwidthGbps</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList">DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCount">networkInterfaceCount</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList">DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">onDemandMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupport">requireHibernateSupport</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">spotMaxPricePercentageOverLowestPrice</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGb">totalLocalStorageGb</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList">DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.vcpuCount">vcpuCount</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList">DataAwsLaunchTemplateInstanceRequirementsVcpuCountList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirements">DataAwsLaunchTemplateInstanceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList getAcceleratorCount();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList">DataAwsLaunchTemplateInstanceRequirementsAcceleratorCountList</a>

---

##### `acceleratorManufacturers`<sup>Required</sup> <a name="acceleratorManufacturers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```java
public java.util.List<java.lang.String> getAcceleratorManufacturers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorNames`<sup>Required</sup> <a name="acceleratorNames" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```java
public java.util.List<java.lang.String> getAcceleratorNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acceleratorTotalMemoryMib`<sup>Required</sup> <a name="acceleratorTotalMemoryMib" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMib"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList getAcceleratorTotalMemoryMib();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList">DataAwsLaunchTemplateInstanceRequirementsAcceleratorTotalMemoryMibList</a>

---

##### `acceleratorTypes`<sup>Required</sup> <a name="acceleratorTypes" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```java
public java.util.List<java.lang.String> getAcceleratorTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedInstanceTypes`<sup>Required</sup> <a name="allowedInstanceTypes" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getAllowedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bareMetal`<sup>Required</sup> <a name="bareMetal" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.bareMetal"></a>

```java
public java.lang.String getBareMetal();
```

- *Type:* java.lang.String

---

##### `baselineEbsBandwidthMbps`<sup>Required</sup> <a name="baselineEbsBandwidthMbps" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList getBaselineEbsBandwidthMbps();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList">DataAwsLaunchTemplateInstanceRequirementsBaselineEbsBandwidthMbpsList</a>

---

##### `burstablePerformance`<sup>Required</sup> <a name="burstablePerformance" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```java
public java.lang.String getBurstablePerformance();
```

- *Type:* java.lang.String

---

##### `cpuManufacturers`<sup>Required</sup> <a name="cpuManufacturers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```java
public java.util.List<java.lang.String> getCpuManufacturers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedInstanceTypes`<sup>Required</sup> <a name="excludedInstanceTypes" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```java
public java.util.List<java.lang.String> getExcludedInstanceTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `instanceGenerations`<sup>Required</sup> <a name="instanceGenerations" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```java
public java.util.List<java.lang.String> getInstanceGenerations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `localStorage`<sup>Required</sup> <a name="localStorage" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.localStorage"></a>

```java
public java.lang.String getLocalStorage();
```

- *Type:* java.lang.String

---

##### `localStorageTypes`<sup>Required</sup> <a name="localStorageTypes" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```java
public java.util.List<java.lang.String> getLocalStorageTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxSpotPriceAsPercentageOfOptimalOnDemandPrice`<sup>Required</sup> <a name="maxSpotPriceAsPercentageOfOptimalOnDemandPrice" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice"></a>

```java
public java.lang.Number getMaxSpotPriceAsPercentageOfOptimalOnDemandPrice();
```

- *Type:* java.lang.Number

---

##### `memoryGibPerVcpu`<sup>Required</sup> <a name="memoryGibPerVcpu" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.memoryGibPerVcpu"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList getMemoryGibPerVcpu();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList">DataAwsLaunchTemplateInstanceRequirementsMemoryGibPerVcpuList</a>

---

##### `memoryMib`<sup>Required</sup> <a name="memoryMib" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.memoryMib"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsMemoryMibList getMemoryMib();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsMemoryMibList">DataAwsLaunchTemplateInstanceRequirementsMemoryMibList</a>

---

##### `networkBandwidthGbps`<sup>Required</sup> <a name="networkBandwidthGbps" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.networkBandwidthGbps"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList getNetworkBandwidthGbps();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList">DataAwsLaunchTemplateInstanceRequirementsNetworkBandwidthGbpsList</a>

---

##### `networkInterfaceCount`<sup>Required</sup> <a name="networkInterfaceCount" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList getNetworkInterfaceCount();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList">DataAwsLaunchTemplateInstanceRequirementsNetworkInterfaceCountList</a>

---

##### `onDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="onDemandMaxPricePercentageOverLowestPrice" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getOnDemandMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

---

##### `requireHibernateSupport`<sup>Required</sup> <a name="requireHibernateSupport" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```java
public IResolvable getRequireHibernateSupport();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `spotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="spotMaxPricePercentageOverLowestPrice" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```java
public java.lang.Number getSpotMaxPricePercentageOverLowestPrice();
```

- *Type:* java.lang.Number

---

##### `totalLocalStorageGb`<sup>Required</sup> <a name="totalLocalStorageGb" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList getTotalLocalStorageGb();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList">DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList</a>

---

##### `vcpuCount`<sup>Required</sup> <a name="vcpuCount" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.vcpuCount"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsVcpuCountList getVcpuCount();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList">DataAwsLaunchTemplateInstanceRequirementsVcpuCountList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateInstanceRequirements getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirements">DataAwsLaunchTemplateInstanceRequirements</a>

---


### DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList <a name="DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList;

new DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.get"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference;

new DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb">DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb">DataAwsLaunchTemplateInstanceRequirementsTotalLocalStorageGb</a>

---


### DataAwsLaunchTemplateInstanceRequirementsVcpuCountList <a name="DataAwsLaunchTemplateInstanceRequirementsVcpuCountList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList;

new DataAwsLaunchTemplateInstanceRequirementsVcpuCountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.get"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference <a name="DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference;

new DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.max">max</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.min">min</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount">DataAwsLaunchTemplateInstanceRequirementsVcpuCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.max"></a>

```java
public java.lang.Number getMax();
```

- *Type:* java.lang.Number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.min"></a>

```java
public java.lang.Number getMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCountOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateInstanceRequirementsVcpuCount getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateInstanceRequirementsVcpuCount">DataAwsLaunchTemplateInstanceRequirementsVcpuCount</a>

---


### DataAwsLaunchTemplateLicenseSpecificationList <a name="DataAwsLaunchTemplateLicenseSpecificationList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateLicenseSpecificationList;

new DataAwsLaunchTemplateLicenseSpecificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.get"></a>

```java
public DataAwsLaunchTemplateLicenseSpecificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateLicenseSpecificationOutputReference <a name="DataAwsLaunchTemplateLicenseSpecificationOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateLicenseSpecificationOutputReference;

new DataAwsLaunchTemplateLicenseSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn">licenseConfigurationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecification">DataAwsLaunchTemplateLicenseSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `licenseConfigurationArn`<sup>Required</sup> <a name="licenseConfigurationArn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.licenseConfigurationArn"></a>

```java
public java.lang.String getLicenseConfigurationArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateLicenseSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateLicenseSpecification">DataAwsLaunchTemplateLicenseSpecification</a>

---


### DataAwsLaunchTemplateMaintenanceOptionsList <a name="DataAwsLaunchTemplateMaintenanceOptionsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateMaintenanceOptionsList;

new DataAwsLaunchTemplateMaintenanceOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.get"></a>

```java
public DataAwsLaunchTemplateMaintenanceOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateMaintenanceOptionsOutputReference <a name="DataAwsLaunchTemplateMaintenanceOptionsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateMaintenanceOptionsOutputReference;

new DataAwsLaunchTemplateMaintenanceOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.autoRecovery">autoRecovery</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptions">DataAwsLaunchTemplateMaintenanceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoRecovery`<sup>Required</sup> <a name="autoRecovery" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```java
public java.lang.String getAutoRecovery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateMaintenanceOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMaintenanceOptions">DataAwsLaunchTemplateMaintenanceOptions</a>

---


### DataAwsLaunchTemplateMetadataOptionsList <a name="DataAwsLaunchTemplateMetadataOptionsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateMetadataOptionsList;

new DataAwsLaunchTemplateMetadataOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.get"></a>

```java
public DataAwsLaunchTemplateMetadataOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateMetadataOptionsOutputReference <a name="DataAwsLaunchTemplateMetadataOptionsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateMetadataOptionsOutputReference;

new DataAwsLaunchTemplateMetadataOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6">httpProtocolIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptions">DataAwsLaunchTemplateMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpEndpoint"></a>

```java
public java.lang.String getHttpEndpoint();
```

- *Type:* java.lang.String

---

##### `httpProtocolIpv6`<sup>Required</sup> <a name="httpProtocolIpv6" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```java
public java.lang.String getHttpProtocolIpv6();
```

- *Type:* java.lang.String

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```java
public java.lang.Number getHttpPutResponseHopLimit();
```

- *Type:* java.lang.Number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.httpTokens"></a>

```java
public java.lang.String getHttpTokens();
```

- *Type:* java.lang.String

---

##### `instanceMetadataTags`<sup>Required</sup> <a name="instanceMetadataTags" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```java
public java.lang.String getInstanceMetadataTags();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateMetadataOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMetadataOptions">DataAwsLaunchTemplateMetadataOptions</a>

---


### DataAwsLaunchTemplateMonitoringList <a name="DataAwsLaunchTemplateMonitoringList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateMonitoringList;

new DataAwsLaunchTemplateMonitoringList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.get"></a>

```java
public DataAwsLaunchTemplateMonitoringOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateMonitoringOutputReference <a name="DataAwsLaunchTemplateMonitoringOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateMonitoringOutputReference;

new DataAwsLaunchTemplateMonitoringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoring">DataAwsLaunchTemplateMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoringOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateMonitoring getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateMonitoring">DataAwsLaunchTemplateMonitoring</a>

---


### DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList <a name="DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList;

new DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.get"></a>

```java
public DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference <a name="DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference;

new DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout">tcpEstablishedTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout">udpStreamTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpTimeout">udpTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification">DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tcpEstablishedTimeout`<sup>Required</sup> <a name="tcpEstablishedTimeout" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout"></a>

```java
public java.lang.Number getTcpEstablishedTimeout();
```

- *Type:* java.lang.Number

---

##### `udpStreamTimeout`<sup>Required</sup> <a name="udpStreamTimeout" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout"></a>

```java
public java.lang.Number getUdpStreamTimeout();
```

- *Type:* java.lang.Number

---

##### `udpTimeout`<sup>Required</sup> <a name="udpTimeout" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpTimeout"></a>

```java
public java.lang.Number getUdpTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification">DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecification</a>

---


### DataAwsLaunchTemplateNetworkInterfacesList <a name="DataAwsLaunchTemplateNetworkInterfacesList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateNetworkInterfacesList;

new DataAwsLaunchTemplateNetworkInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.get"></a>

```java
public DataAwsLaunchTemplateNetworkInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateNetworkInterfacesOutputReference <a name="DataAwsLaunchTemplateNetworkInterfacesOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateNetworkInterfacesOutputReference;

new DataAwsLaunchTemplateNetworkInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress">associateCarrierIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.connectionTrackingSpecification">connectionTrackingSpecification</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList">DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.interfaceType">interfaceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount">ipv4AddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCount">ipv4PrefixCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4Prefixes">ipv4Prefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses">ipv6Addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCount">ipv6PrefixCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6Prefixes">ipv6Prefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex">networkCardIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.primaryIpv6">primaryIpv6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfaces">DataAwsLaunchTemplateNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `associateCarrierIpAddress`<sup>Required</sup> <a name="associateCarrierIpAddress" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```java
public java.lang.String getAssociateCarrierIpAddress();
```

- *Type:* java.lang.String

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```java
public java.lang.String getAssociatePublicIpAddress();
```

- *Type:* java.lang.String

---

##### `connectionTrackingSpecification`<sup>Required</sup> <a name="connectionTrackingSpecification" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.connectionTrackingSpecification"></a>

```java
public DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList getConnectionTrackingSpecification();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList">DataAwsLaunchTemplateNetworkInterfacesConnectionTrackingSpecificationList</a>

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```java
public java.lang.String getDeleteOnTermination();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.deviceIndex"></a>

```java
public java.lang.Number getDeviceIndex();
```

- *Type:* java.lang.Number

---

##### `interfaceType`<sup>Required</sup> <a name="interfaceType" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.interfaceType"></a>

```java
public java.lang.String getInterfaceType();
```

- *Type:* java.lang.String

---

##### `ipv4AddressCount`<sup>Required</sup> <a name="ipv4AddressCount" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4AddressCount"></a>

```java
public java.lang.Number getIpv4AddressCount();
```

- *Type:* java.lang.Number

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv4Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv4PrefixCount`<sup>Required</sup> <a name="ipv4PrefixCount" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4PrefixCount"></a>

```java
public java.lang.Number getIpv4PrefixCount();
```

- *Type:* java.lang.Number

---

##### `ipv4Prefixes`<sup>Required</sup> <a name="ipv4Prefixes" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv4Prefixes"></a>

```java
public java.util.List<java.lang.String> getIpv4Prefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```java
public java.lang.Number getIpv6AddressCount();
```

- *Type:* java.lang.Number

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```java
public java.util.List<java.lang.String> getIpv6Addresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6PrefixCount`<sup>Required</sup> <a name="ipv6PrefixCount" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6PrefixCount"></a>

```java
public java.lang.Number getIpv6PrefixCount();
```

- *Type:* java.lang.Number

---

##### `ipv6Prefixes`<sup>Required</sup> <a name="ipv6Prefixes" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.ipv6Prefixes"></a>

```java
public java.util.List<java.lang.String> getIpv6Prefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `networkCardIndex`<sup>Required</sup> <a name="networkCardIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.networkCardIndex"></a>

```java
public java.lang.Number getNetworkCardIndex();
```

- *Type:* java.lang.Number

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `primaryIpv6`<sup>Required</sup> <a name="primaryIpv6" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.primaryIpv6"></a>

```java
public java.lang.String getPrimaryIpv6();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfacesOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateNetworkInterfaces getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkInterfaces">DataAwsLaunchTemplateNetworkInterfaces</a>

---


### DataAwsLaunchTemplateNetworkPerformanceOptionsList <a name="DataAwsLaunchTemplateNetworkPerformanceOptionsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateNetworkPerformanceOptionsList;

new DataAwsLaunchTemplateNetworkPerformanceOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.get"></a>

```java
public DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference <a name="DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference;

new DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.property.bandwidthWeighting">bandwidthWeighting</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptions">DataAwsLaunchTemplateNetworkPerformanceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bandwidthWeighting`<sup>Required</sup> <a name="bandwidthWeighting" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.property.bandwidthWeighting"></a>

```java
public java.lang.String getBandwidthWeighting();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateNetworkPerformanceOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateNetworkPerformanceOptions">DataAwsLaunchTemplateNetworkPerformanceOptions</a>

---


### DataAwsLaunchTemplatePlacementList <a name="DataAwsLaunchTemplatePlacementList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplatePlacementList;

new DataAwsLaunchTemplatePlacementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.get"></a>

```java
public DataAwsLaunchTemplatePlacementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplatePlacementOutputReference <a name="DataAwsLaunchTemplatePlacementOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplatePlacementOutputReference;

new DataAwsLaunchTemplatePlacementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.affinity">affinity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.hostId">hostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.partitionNumber">partitionNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.spreadDomain">spreadDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.tenancy">tenancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacement">DataAwsLaunchTemplatePlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `affinity`<sup>Required</sup> <a name="affinity" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.affinity"></a>

```java
public java.lang.String getAffinity();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.hostId"></a>

```java
public java.lang.String getHostId();
```

- *Type:* java.lang.String

---

##### `hostResourceGroupArn`<sup>Required</sup> <a name="hostResourceGroupArn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.hostResourceGroupArn"></a>

```java
public java.lang.String getHostResourceGroupArn();
```

- *Type:* java.lang.String

---

##### `partitionNumber`<sup>Required</sup> <a name="partitionNumber" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.partitionNumber"></a>

```java
public java.lang.Number getPartitionNumber();
```

- *Type:* java.lang.Number

---

##### `spreadDomain`<sup>Required</sup> <a name="spreadDomain" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.spreadDomain"></a>

```java
public java.lang.String getSpreadDomain();
```

- *Type:* java.lang.String

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.tenancy"></a>

```java
public java.lang.String getTenancy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacementOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplatePlacement getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePlacement">DataAwsLaunchTemplatePlacement</a>

---


### DataAwsLaunchTemplatePrivateDnsNameOptionsList <a name="DataAwsLaunchTemplatePrivateDnsNameOptionsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplatePrivateDnsNameOptionsList;

new DataAwsLaunchTemplatePrivateDnsNameOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.get"></a>

```java
public DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference <a name="DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference;

new DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameType">hostnameType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptions">DataAwsLaunchTemplatePrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```java
public IResolvable getEnableResourceNameDnsAaaaRecord();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `enableResourceNameDnsARecord`<sup>Required</sup> <a name="enableResourceNameDnsARecord" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```java
public IResolvable getEnableResourceNameDnsARecord();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `hostnameType`<sup>Required</sup> <a name="hostnameType" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```java
public java.lang.String getHostnameType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplatePrivateDnsNameOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplatePrivateDnsNameOptions">DataAwsLaunchTemplatePrivateDnsNameOptions</a>

---


### DataAwsLaunchTemplateSecondaryInterfacesList <a name="DataAwsLaunchTemplateSecondaryInterfacesList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateSecondaryInterfacesList;

new DataAwsLaunchTemplateSecondaryInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.get"></a>

```java
public DataAwsLaunchTemplateSecondaryInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateSecondaryInterfacesOutputReference <a name="DataAwsLaunchTemplateSecondaryInterfacesOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateSecondaryInterfacesOutputReference;

new DataAwsLaunchTemplateSecondaryInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.interfaceType">interfaceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.networkCardIndex">networkCardIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.privateIpAddressCount">privateIpAddressCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.privateIpAddresses">privateIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.secondarySubnetId">secondarySubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfaces">DataAwsLaunchTemplateSecondaryInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.deleteOnTermination"></a>

```java
public IResolvable getDeleteOnTermination();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.deviceIndex"></a>

```java
public java.lang.Number getDeviceIndex();
```

- *Type:* java.lang.Number

---

##### `interfaceType`<sup>Required</sup> <a name="interfaceType" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.interfaceType"></a>

```java
public java.lang.String getInterfaceType();
```

- *Type:* java.lang.String

---

##### `networkCardIndex`<sup>Required</sup> <a name="networkCardIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.networkCardIndex"></a>

```java
public java.lang.Number getNetworkCardIndex();
```

- *Type:* java.lang.Number

---

##### `privateIpAddressCount`<sup>Required</sup> <a name="privateIpAddressCount" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.privateIpAddressCount"></a>

```java
public java.lang.Number getPrivateIpAddressCount();
```

- *Type:* java.lang.Number

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.privateIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPrivateIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secondarySubnetId`<sup>Required</sup> <a name="secondarySubnetId" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.secondarySubnetId"></a>

```java
public java.lang.String getSecondarySubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfacesOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateSecondaryInterfaces getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateSecondaryInterfaces">DataAwsLaunchTemplateSecondaryInterfaces</a>

---


### DataAwsLaunchTemplateTagSpecificationsList <a name="DataAwsLaunchTemplateTagSpecificationsList" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateTagSpecificationsList;

new DataAwsLaunchTemplateTagSpecificationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.get"></a>

```java
public DataAwsLaunchTemplateTagSpecificationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsLaunchTemplateTagSpecificationsOutputReference <a name="DataAwsLaunchTemplateTagSpecificationsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateTagSpecificationsOutputReference;

new DataAwsLaunchTemplateTagSpecificationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.tags">tags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecifications">DataAwsLaunchTemplateTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecificationsOutputReference.property.internalValue"></a>

```java
public DataAwsLaunchTemplateTagSpecifications getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTagSpecifications">DataAwsLaunchTemplateTagSpecifications</a>

---


### DataAwsLaunchTemplateTimeoutsOutputReference <a name="DataAwsLaunchTemplateTimeoutsOutputReference" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_launch_template.DataAwsLaunchTemplateTimeoutsOutputReference;

new DataAwsLaunchTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsLaunchTemplateTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsLaunchTemplate.DataAwsLaunchTemplateTimeouts">DataAwsLaunchTemplateTimeouts</a>

---



