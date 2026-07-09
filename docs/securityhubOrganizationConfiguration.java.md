# `securityhubOrganizationConfiguration` Submodule <a name="`securityhubOrganizationConfiguration` Submodule" id="@cdktn/provider-aws.securityhubOrganizationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubOrganizationConfiguration <a name="SecurityhubOrganizationConfiguration" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration aws_securityhub_organization_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_organization_configuration.SecurityhubOrganizationConfiguration;

SecurityhubOrganizationConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoEnable(java.lang.Boolean|IResolvable)
//  .autoEnableStandards(java.lang.String)
//  .id(java.lang.String)
//  .organizationConfiguration(SecurityhubOrganizationConfigurationOrganizationConfiguration)
//  .region(java.lang.String)
//  .timeouts(SecurityhubOrganizationConfigurationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.autoEnable">autoEnable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#auto_enable SecurityhubOrganizationConfiguration#auto_enable}. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.autoEnableStandards">autoEnableStandards</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#auto_enable_standards SecurityhubOrganizationConfiguration#auto_enable_standards}. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#id SecurityhubOrganizationConfiguration#id}. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.organizationConfiguration">organizationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a></code> | organization_configuration block. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.autoEnable"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#auto_enable SecurityhubOrganizationConfiguration#auto_enable}.

---

##### `autoEnableStandards`<sup>Optional</sup> <a name="autoEnableStandards" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.autoEnableStandards"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#auto_enable_standards SecurityhubOrganizationConfiguration#auto_enable_standards}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#id SecurityhubOrganizationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationConfiguration`<sup>Optional</sup> <a name="organizationConfiguration" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.organizationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a>

organization_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#organization_configuration SecurityhubOrganizationConfiguration#organization_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#region SecurityhubOrganizationConfiguration#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#timeouts SecurityhubOrganizationConfiguration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putOrganizationConfiguration">putOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetAutoEnableStandards">resetAutoEnableStandards</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetOrganizationConfiguration">resetOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOrganizationConfiguration` <a name="putOrganizationConfiguration" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putOrganizationConfiguration"></a>

```java
public void putOrganizationConfiguration(SecurityhubOrganizationConfigurationOrganizationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putOrganizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putTimeouts"></a>

```java
public void putTimeouts(SecurityhubOrganizationConfigurationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a>

---

##### `resetAutoEnableStandards` <a name="resetAutoEnableStandards" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetAutoEnableStandards"></a>

```java
public void resetAutoEnableStandards()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetOrganizationConfiguration` <a name="resetOrganizationConfiguration" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetOrganizationConfiguration"></a>

```java
public void resetOrganizationConfiguration()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubOrganizationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.aws.securityhub_organization_configuration.SecurityhubOrganizationConfiguration;

SecurityhubOrganizationConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.securityhub_organization_configuration.SecurityhubOrganizationConfiguration;

SecurityhubOrganizationConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.securityhub_organization_configuration.SecurityhubOrganizationConfiguration;

SecurityhubOrganizationConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.securityhub_organization_configuration.SecurityhubOrganizationConfiguration;

SecurityhubOrganizationConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityhubOrganizationConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityhubOrganizationConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityhubOrganizationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityhubOrganizationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubOrganizationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.organizationConfiguration">organizationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference">SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference">SecurityhubOrganizationConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnableInput">autoEnableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnableStandardsInput">autoEnableStandardsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.organizationConfigurationInput">organizationConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnable">autoEnable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnableStandards">autoEnableStandards</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `organizationConfiguration`<sup>Required</sup> <a name="organizationConfiguration" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.organizationConfiguration"></a>

```java
public SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference getOrganizationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference">SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.timeouts"></a>

```java
public SecurityhubOrganizationConfigurationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference">SecurityhubOrganizationConfigurationTimeoutsOutputReference</a>

---

##### `autoEnableInput`<sup>Optional</sup> <a name="autoEnableInput" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnableInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoEnableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoEnableStandardsInput`<sup>Optional</sup> <a name="autoEnableStandardsInput" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnableStandardsInput"></a>

```java
public java.lang.String getAutoEnableStandardsInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `organizationConfigurationInput`<sup>Optional</sup> <a name="organizationConfigurationInput" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.organizationConfigurationInput"></a>

```java
public SecurityhubOrganizationConfigurationOrganizationConfiguration getOrganizationConfigurationInput();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.timeoutsInput"></a>

```java
public IResolvable|SecurityhubOrganizationConfigurationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a>

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnable"></a>

```java
public java.lang.Boolean|IResolvable getAutoEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoEnableStandards`<sup>Required</sup> <a name="autoEnableStandards" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.autoEnableStandards"></a>

```java
public java.lang.String getAutoEnableStandards();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubOrganizationConfigurationConfig <a name="SecurityhubOrganizationConfigurationConfig" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_organization_configuration.SecurityhubOrganizationConfigurationConfig;

SecurityhubOrganizationConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .autoEnable(java.lang.Boolean|IResolvable)
//  .autoEnableStandards(java.lang.String)
//  .id(java.lang.String)
//  .organizationConfiguration(SecurityhubOrganizationConfigurationOrganizationConfiguration)
//  .region(java.lang.String)
//  .timeouts(SecurityhubOrganizationConfigurationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.autoEnable">autoEnable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#auto_enable SecurityhubOrganizationConfiguration#auto_enable}. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.autoEnableStandards">autoEnableStandards</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#auto_enable_standards SecurityhubOrganizationConfiguration#auto_enable_standards}. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#id SecurityhubOrganizationConfiguration#id}. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.organizationConfiguration">organizationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a></code> | organization_configuration block. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.autoEnable"></a>

```java
public java.lang.Boolean|IResolvable getAutoEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#auto_enable SecurityhubOrganizationConfiguration#auto_enable}.

---

##### `autoEnableStandards`<sup>Optional</sup> <a name="autoEnableStandards" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.autoEnableStandards"></a>

```java
public java.lang.String getAutoEnableStandards();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#auto_enable_standards SecurityhubOrganizationConfiguration#auto_enable_standards}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#id SecurityhubOrganizationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationConfiguration`<sup>Optional</sup> <a name="organizationConfiguration" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.organizationConfiguration"></a>

```java
public SecurityhubOrganizationConfigurationOrganizationConfiguration getOrganizationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a>

organization_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#organization_configuration SecurityhubOrganizationConfiguration#organization_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#region SecurityhubOrganizationConfiguration#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationConfig.property.timeouts"></a>

```java
public SecurityhubOrganizationConfigurationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#timeouts SecurityhubOrganizationConfiguration#timeouts}

---

### SecurityhubOrganizationConfigurationOrganizationConfiguration <a name="SecurityhubOrganizationConfigurationOrganizationConfiguration" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_organization_configuration.SecurityhubOrganizationConfigurationOrganizationConfiguration;

SecurityhubOrganizationConfigurationOrganizationConfiguration.builder()
    .configurationType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration.property.configurationType">configurationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#configuration_type SecurityhubOrganizationConfiguration#configuration_type}. |

---

##### `configurationType`<sup>Required</sup> <a name="configurationType" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration.property.configurationType"></a>

```java
public java.lang.String getConfigurationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#configuration_type SecurityhubOrganizationConfiguration#configuration_type}.

---

### SecurityhubOrganizationConfigurationTimeouts <a name="SecurityhubOrganizationConfigurationTimeouts" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_organization_configuration.SecurityhubOrganizationConfigurationTimeouts;

SecurityhubOrganizationConfigurationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#create SecurityhubOrganizationConfiguration#create}. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#delete SecurityhubOrganizationConfiguration#delete}. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#update SecurityhubOrganizationConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#create SecurityhubOrganizationConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#delete SecurityhubOrganizationConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.54.0/docs/resources/securityhub_organization_configuration#update SecurityhubOrganizationConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference <a name="SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_organization_configuration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference;

new SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.configurationTypeInput">configurationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.configurationType">configurationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationTypeInput`<sup>Optional</sup> <a name="configurationTypeInput" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.configurationTypeInput"></a>

```java
public java.lang.String getConfigurationTypeInput();
```

- *Type:* java.lang.String

---

##### `configurationType`<sup>Required</sup> <a name="configurationType" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.configurationType"></a>

```java
public java.lang.String getConfigurationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfigurationOutputReference.property.internalValue"></a>

```java
public SecurityhubOrganizationConfigurationOrganizationConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationOrganizationConfiguration">SecurityhubOrganizationConfigurationOrganizationConfiguration</a>

---


### SecurityhubOrganizationConfigurationTimeoutsOutputReference <a name="SecurityhubOrganizationConfigurationTimeoutsOutputReference" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_organization_configuration.SecurityhubOrganizationConfigurationTimeoutsOutputReference;

new SecurityhubOrganizationConfigurationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubOrganizationConfigurationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubOrganizationConfiguration.SecurityhubOrganizationConfigurationTimeouts">SecurityhubOrganizationConfigurationTimeouts</a>

---



