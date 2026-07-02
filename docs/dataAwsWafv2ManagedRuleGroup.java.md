# `dataAwsWafv2ManagedRuleGroup` Submodule <a name="`dataAwsWafv2ManagedRuleGroup` Submodule" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsWafv2ManagedRuleGroup <a name="DataAwsWafv2ManagedRuleGroup" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group aws_wafv2_managed_rule_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroup;

DataAwsWafv2ManagedRuleGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .scope(java.lang.String)
    .vendorName(java.lang.String)
//  .region(java.lang.String)
//  .versionName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#name DataAwsWafv2ManagedRuleGroup#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#scope DataAwsWafv2ManagedRuleGroup#scope}. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.vendorName">vendorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#vendor_name DataAwsWafv2ManagedRuleGroup#vendor_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.versionName">versionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#version_name DataAwsWafv2ManagedRuleGroup#version_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#name DataAwsWafv2ManagedRuleGroup#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#scope DataAwsWafv2ManagedRuleGroup#scope}.

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.vendorName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#vendor_name DataAwsWafv2ManagedRuleGroup#vendor_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#region DataAwsWafv2ManagedRuleGroup#region}

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.Initializer.parameter.versionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#version_name DataAwsWafv2ManagedRuleGroup#version_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.resetVersionName">resetVersionName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetVersionName` <a name="resetVersionName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.resetVersionName"></a>

```java
public void resetVersionName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsWafv2ManagedRuleGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroup;

DataAwsWafv2ManagedRuleGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroup;

DataAwsWafv2ManagedRuleGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroup;

DataAwsWafv2ManagedRuleGroup.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroup;

DataAwsWafv2ManagedRuleGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsWafv2ManagedRuleGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsWafv2ManagedRuleGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsWafv2ManagedRuleGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsWafv2ManagedRuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsWafv2ManagedRuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.availableLabels">availableLabels</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList">DataAwsWafv2ManagedRuleGroupAvailableLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.capacity">capacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.consumedLabels">consumedLabels</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList">DataAwsWafv2ManagedRuleGroupConsumedLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.labelNamespace">labelNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList">DataAwsWafv2ManagedRuleGroupRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.snsTopicArn">snsTopicArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.vendorNameInput">vendorNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.versionNameInput">versionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `availableLabels`<sup>Required</sup> <a name="availableLabels" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.availableLabels"></a>

```java
public DataAwsWafv2ManagedRuleGroupAvailableLabelsList getAvailableLabels();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList">DataAwsWafv2ManagedRuleGroupAvailableLabelsList</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.capacity"></a>

```java
public java.lang.Number getCapacity();
```

- *Type:* java.lang.Number

---

##### `consumedLabels`<sup>Required</sup> <a name="consumedLabels" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.consumedLabels"></a>

```java
public DataAwsWafv2ManagedRuleGroupConsumedLabelsList getConsumedLabels();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList">DataAwsWafv2ManagedRuleGroupConsumedLabelsList</a>

---

##### `labelNamespace`<sup>Required</sup> <a name="labelNamespace" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.labelNamespace"></a>

```java
public java.lang.String getLabelNamespace();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.rules"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList">DataAwsWafv2ManagedRuleGroupRulesList</a>

---

##### `snsTopicArn`<sup>Required</sup> <a name="snsTopicArn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.snsTopicArn"></a>

```java
public java.lang.String getSnsTopicArn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `vendorNameInput`<sup>Optional</sup> <a name="vendorNameInput" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.vendorNameInput"></a>

```java
public java.lang.String getVendorNameInput();
```

- *Type:* java.lang.String

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.versionNameInput"></a>

```java
public java.lang.String getVersionNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsWafv2ManagedRuleGroupAvailableLabels <a name="DataAwsWafv2ManagedRuleGroupAvailableLabels" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabels.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupAvailableLabels;

DataAwsWafv2ManagedRuleGroupAvailableLabels.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupConfig <a name="DataAwsWafv2ManagedRuleGroupConfig" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupConfig;

DataAwsWafv2ManagedRuleGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .scope(java.lang.String)
    .vendorName(java.lang.String)
//  .region(java.lang.String)
//  .versionName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#name DataAwsWafv2ManagedRuleGroup#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#scope DataAwsWafv2ManagedRuleGroup#scope}. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.vendorName">vendorName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#vendor_name DataAwsWafv2ManagedRuleGroup#vendor_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.versionName">versionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#version_name DataAwsWafv2ManagedRuleGroup#version_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#name DataAwsWafv2ManagedRuleGroup#name}.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#scope DataAwsWafv2ManagedRuleGroup#scope}.

---

##### `vendorName`<sup>Required</sup> <a name="vendorName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.vendorName"></a>

```java
public java.lang.String getVendorName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#vendor_name DataAwsWafv2ManagedRuleGroup#vendor_name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#region DataAwsWafv2ManagedRuleGroup#region}

---

##### `versionName`<sup>Optional</sup> <a name="versionName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConfig.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/data-sources/wafv2_managed_rule_group#version_name DataAwsWafv2ManagedRuleGroup#version_name}.

---

### DataAwsWafv2ManagedRuleGroupConsumedLabels <a name="DataAwsWafv2ManagedRuleGroupConsumedLabels" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabels.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupConsumedLabels;

DataAwsWafv2ManagedRuleGroupConsumedLabels.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRules <a name="DataAwsWafv2ManagedRuleGroupRules" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRules.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRules;

DataAwsWafv2ManagedRuleGroupRules.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesAction <a name="DataAwsWafv2ManagedRuleGroupRulesAction" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesAction.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesAction;

DataAwsWafv2ManagedRuleGroupRulesAction.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionAllow <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllow" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllow.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionAllow;

DataAwsWafv2ManagedRuleGroupRulesActionAllow.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling;

DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader;

DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionBlock <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlock" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlock.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionBlock;

DataAwsWafv2ManagedRuleGroupRulesActionBlock.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse;

DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader;

DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionCaptcha <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptcha" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptcha"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptcha.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCaptcha;

DataAwsWafv2ManagedRuleGroupRulesActionCaptcha.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling;

DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader;

DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionChallenge <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallenge" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallenge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallenge.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionChallenge;

DataAwsWafv2ManagedRuleGroupRulesActionChallenge.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling;

DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader;

DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionCount <a name="DataAwsWafv2ManagedRuleGroupRulesActionCount" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCount.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCount;

DataAwsWafv2ManagedRuleGroupRulesActionCount.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling;

DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling.builder()
    .build();
```


### DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader;

DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsWafv2ManagedRuleGroupAvailableLabelsList <a name="DataAwsWafv2ManagedRuleGroupAvailableLabelsList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupAvailableLabelsList;

new DataAwsWafv2ManagedRuleGroupAvailableLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference <a name="DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference;

new DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabels">DataAwsWafv2ManagedRuleGroupAvailableLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabelsOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupAvailableLabels getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupAvailableLabels">DataAwsWafv2ManagedRuleGroupAvailableLabels</a>

---


### DataAwsWafv2ManagedRuleGroupConsumedLabelsList <a name="DataAwsWafv2ManagedRuleGroupConsumedLabelsList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupConsumedLabelsList;

new DataAwsWafv2ManagedRuleGroupConsumedLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference <a name="DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference;

new DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabels">DataAwsWafv2ManagedRuleGroupConsumedLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabelsOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupConsumedLabels getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupConsumedLabels">DataAwsWafv2ManagedRuleGroupConsumedLabels</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeader</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.insertHeader">insertHeader</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.insertHeader"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList getInsertHeader();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingInsertHeaderList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandling</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionAllowList <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionAllowList;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllow">DataAwsWafv2ManagedRuleGroupRulesActionAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customRequestHandling`<sup>Required</sup> <a name="customRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.customRequestHandling"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList getCustomRequestHandling();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionAllowCustomRequestHandlingList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionAllow getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllow">DataAwsWafv2ManagedRuleGroupRulesActionAllow</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.customResponseBodyKey">customResponseBodyKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.responseCode">responseCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.responseHeader">responseHeader</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customResponseBodyKey`<sup>Required</sup> <a name="customResponseBodyKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.customResponseBodyKey"></a>

```java
public java.lang.String getCustomResponseBodyKey();
```

- *Type:* java.lang.String

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.responseCode"></a>

```java
public java.lang.Number getResponseCode();
```

- *Type:* java.lang.Number

---

##### `responseHeader`<sup>Required</sup> <a name="responseHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.responseHeader"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList getResponseHeader();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponse</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeaderOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseResponseHeader</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionBlockList <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionBlockList;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.customResponse">customResponse</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlock">DataAwsWafv2ManagedRuleGroupRulesActionBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customResponse`<sup>Required</sup> <a name="customResponse" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.customResponse"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList getCustomResponse();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList">DataAwsWafv2ManagedRuleGroupRulesActionBlockCustomResponseList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionBlock getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlock">DataAwsWafv2ManagedRuleGroupRulesActionBlock</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeader</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader">insertHeader</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.insertHeader"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList getInsertHeader();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingInsertHeaderList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandling</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptcha">DataAwsWafv2ManagedRuleGroupRulesActionCaptcha</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customRequestHandling`<sup>Required</sup> <a name="customRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.customRequestHandling"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList getCustomRequestHandling();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaCustomRequestHandlingList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCaptcha getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptcha">DataAwsWafv2ManagedRuleGroupRulesActionCaptcha</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeader</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.insertHeader">insertHeader</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.insertHeader"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList getInsertHeader();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingInsertHeaderList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandling</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeList <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallenge">DataAwsWafv2ManagedRuleGroupRulesActionChallenge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customRequestHandling`<sup>Required</sup> <a name="customRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.customRequestHandling"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList getCustomRequestHandling();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionChallengeCustomRequestHandlingList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionChallenge getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallenge">DataAwsWafv2ManagedRuleGroupRulesActionChallenge</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList;

new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeader</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList;

new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.insertHeader">insertHeader</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `insertHeader`<sup>Required</sup> <a name="insertHeader" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.insertHeader"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList getInsertHeader();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingInsertHeaderList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandling</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionCountList <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCountList;

new DataAwsWafv2ManagedRuleGroupRulesActionCountList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.customRequestHandling">customRequestHandling</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCount">DataAwsWafv2ManagedRuleGroupRulesActionCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customRequestHandling`<sup>Required</sup> <a name="customRequestHandling" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.customRequestHandling"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList getCustomRequestHandling();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList">DataAwsWafv2ManagedRuleGroupRulesActionCountCustomRequestHandlingList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCount getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCount">DataAwsWafv2ManagedRuleGroupRulesActionCount</a>

---


### DataAwsWafv2ManagedRuleGroupRulesActionList <a name="DataAwsWafv2ManagedRuleGroupRulesActionList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionList;

new DataAwsWafv2ManagedRuleGroupRulesActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesActionOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesActionOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.allow">allow</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList">DataAwsWafv2ManagedRuleGroupRulesActionAllowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.block">block</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList">DataAwsWafv2ManagedRuleGroupRulesActionBlockList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.captcha">captcha</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.challenge">challenge</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList">DataAwsWafv2ManagedRuleGroupRulesActionChallengeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.count">count</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList">DataAwsWafv2ManagedRuleGroupRulesActionCountList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesAction">DataAwsWafv2ManagedRuleGroupRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.allow"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionAllowList getAllow();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionAllowList">DataAwsWafv2ManagedRuleGroupRulesActionAllowList</a>

---

##### `block`<sup>Required</sup> <a name="block" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.block"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionBlockList getBlock();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionBlockList">DataAwsWafv2ManagedRuleGroupRulesActionBlockList</a>

---

##### `captcha`<sup>Required</sup> <a name="captcha" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.captcha"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList getCaptcha();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList">DataAwsWafv2ManagedRuleGroupRulesActionCaptchaList</a>

---

##### `challenge`<sup>Required</sup> <a name="challenge" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.challenge"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionChallengeList getChallenge();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionChallengeList">DataAwsWafv2ManagedRuleGroupRulesActionChallengeList</a>

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.count"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionCountList getCount();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionCountList">DataAwsWafv2ManagedRuleGroupRulesActionCountList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesAction">DataAwsWafv2ManagedRuleGroupRulesAction</a>

---


### DataAwsWafv2ManagedRuleGroupRulesList <a name="DataAwsWafv2ManagedRuleGroupRulesList" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesList;

new DataAwsWafv2ManagedRuleGroupRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.get"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsWafv2ManagedRuleGroupRulesOutputReference <a name="DataAwsWafv2ManagedRuleGroupRulesOutputReference" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_wafv2_managed_rule_group.DataAwsWafv2ManagedRuleGroupRulesOutputReference;

new DataAwsWafv2ManagedRuleGroupRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList">DataAwsWafv2ManagedRuleGroupRulesActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRules">DataAwsWafv2ManagedRuleGroupRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.action"></a>

```java
public DataAwsWafv2ManagedRuleGroupRulesActionList getAction();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesActionList">DataAwsWafv2ManagedRuleGroupRulesActionList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRulesOutputReference.property.internalValue"></a>

```java
public DataAwsWafv2ManagedRuleGroupRules getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsWafv2ManagedRuleGroup.DataAwsWafv2ManagedRuleGroupRules">DataAwsWafv2ManagedRuleGroupRules</a>

---



