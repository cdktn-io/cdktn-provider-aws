# `dataAwsEc2ServiceLinkVirtualInterfaces` Submodule <a name="`dataAwsEc2ServiceLinkVirtualInterfaces` Submodule" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2ServiceLinkVirtualInterfaces <a name="DataAwsEc2ServiceLinkVirtualInterfaces" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces aws_ec2_service_link_virtual_interfaces}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_service_link_virtual_interfaces.DataAwsEc2ServiceLinkVirtualInterfaces;

DataAwsEc2ServiceLinkVirtualInterfaces.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsEc2ServiceLinkVirtualInterfacesFilter>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces#tags DataAwsEc2ServiceLinkVirtualInterfaces#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.filter"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces#filter DataAwsEc2ServiceLinkVirtualInterfaces#filter}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces#region DataAwsEc2ServiceLinkVirtualInterfaces#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces#tags DataAwsEc2ServiceLinkVirtualInterfaces#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<DataAwsEc2ServiceLinkVirtualInterfacesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2ServiceLinkVirtualInterfaces resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_service_link_virtual_interfaces.DataAwsEc2ServiceLinkVirtualInterfaces;

DataAwsEc2ServiceLinkVirtualInterfaces.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_service_link_virtual_interfaces.DataAwsEc2ServiceLinkVirtualInterfaces;

DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_service_link_virtual_interfaces.DataAwsEc2ServiceLinkVirtualInterfaces;

DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_service_link_virtual_interfaces.DataAwsEc2ServiceLinkVirtualInterfaces;

DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsEc2ServiceLinkVirtualInterfaces resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsEc2ServiceLinkVirtualInterfaces to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsEc2ServiceLinkVirtualInterfaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2ServiceLinkVirtualInterfaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList">DataAwsEc2ServiceLinkVirtualInterfacesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.ids">ids</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.filter"></a>

```java
public DataAwsEc2ServiceLinkVirtualInterfacesFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList">DataAwsEc2ServiceLinkVirtualInterfacesFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.ids"></a>

```java
public java.util.List<java.lang.String> getIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.filterInput"></a>

```java
public IResolvable|java.util.List<DataAwsEc2ServiceLinkVirtualInterfacesFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfaces.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2ServiceLinkVirtualInterfacesConfig <a name="DataAwsEc2ServiceLinkVirtualInterfacesConfig" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_service_link_virtual_interfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig;

DataAwsEc2ServiceLinkVirtualInterfacesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(IResolvable|java.util.List<DataAwsEc2ServiceLinkVirtualInterfacesFilter>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces#tags DataAwsEc2ServiceLinkVirtualInterfaces#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.filter"></a>

```java
public IResolvable|java.util.List<DataAwsEc2ServiceLinkVirtualInterfacesFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces#filter DataAwsEc2ServiceLinkVirtualInterfaces#filter}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces#region DataAwsEc2ServiceLinkVirtualInterfaces#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces#tags DataAwsEc2ServiceLinkVirtualInterfaces#tags}.

---

### DataAwsEc2ServiceLinkVirtualInterfacesFilter <a name="DataAwsEc2ServiceLinkVirtualInterfacesFilter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_service_link_virtual_interfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter;

DataAwsEc2ServiceLinkVirtualInterfacesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces#name DataAwsEc2ServiceLinkVirtualInterfaces#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces#values DataAwsEc2ServiceLinkVirtualInterfaces#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces#name DataAwsEc2ServiceLinkVirtualInterfaces#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interfaces#values DataAwsEc2ServiceLinkVirtualInterfaces#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2ServiceLinkVirtualInterfacesFilterList <a name="DataAwsEc2ServiceLinkVirtualInterfacesFilterList" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_service_link_virtual_interfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList;

new DataAwsEc2ServiceLinkVirtualInterfacesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.get"></a>

```java
public DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DataAwsEc2ServiceLinkVirtualInterfacesFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>>

---


### DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference <a name="DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_ec2_service_link_virtual_interfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference;

new DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DataAwsEc2ServiceLinkVirtualInterfacesFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterfaces.DataAwsEc2ServiceLinkVirtualInterfacesFilter">DataAwsEc2ServiceLinkVirtualInterfacesFilter</a>

---



