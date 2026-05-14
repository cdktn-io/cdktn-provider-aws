# `securityhubConfigurationPolicyAssociation` Submodule <a name="`securityhubConfigurationPolicyAssociation` Submodule" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConfigurationPolicyAssociation <a name="SecurityhubConfigurationPolicyAssociation" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association aws_securityhub_configuration_policy_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_configuration_policy_association.SecurityhubConfigurationPolicyAssociation;

SecurityhubConfigurationPolicyAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .policyId(java.lang.String)
    .targetId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(SecurityhubConfigurationPolicyAssociationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | The universally unique identifier (UUID) of the configuration policy, or SELF_MANAGED_SECURITY_HUB for a self-managed configuration. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.targetId">targetId</a></code> | <code>java.lang.String</code> | The identifier of the target account, organizational unit, or the root to associate with the specified configuration. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#id SecurityhubConfigurationPolicyAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

The universally unique identifier (UUID) of the configuration policy, or SELF_MANAGED_SECURITY_HUB for a self-managed configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#policy_id SecurityhubConfigurationPolicyAssociation#policy_id}

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.targetId"></a>

- *Type:* java.lang.String

The identifier of the target account, organizational unit, or the root to associate with the specified configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#target_id SecurityhubConfigurationPolicyAssociation#target_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#id SecurityhubConfigurationPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#region SecurityhubConfigurationPolicyAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#timeouts SecurityhubConfigurationPolicyAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.putTimeouts"></a>

```java
public void putTimeouts(SecurityhubConfigurationPolicyAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubConfigurationPolicyAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isConstruct"></a>

```java
import io.cdktn.providers.aws.securityhub_configuration_policy_association.SecurityhubConfigurationPolicyAssociation;

SecurityhubConfigurationPolicyAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.securityhub_configuration_policy_association.SecurityhubConfigurationPolicyAssociation;

SecurityhubConfigurationPolicyAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.securityhub_configuration_policy_association.SecurityhubConfigurationPolicyAssociation;

SecurityhubConfigurationPolicyAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.securityhub_configuration_policy_association.SecurityhubConfigurationPolicyAssociation;

SecurityhubConfigurationPolicyAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SecurityhubConfigurationPolicyAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SecurityhubConfigurationPolicyAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SecurityhubConfigurationPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SecurityhubConfigurationPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubConfigurationPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference">SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.timeouts"></a>

```java
public SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference">SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.timeoutsInput"></a>

```java
public IResolvable|SecurityhubConfigurationPolicyAssociationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConfigurationPolicyAssociationConfig <a name="SecurityhubConfigurationPolicyAssociationConfig" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_configuration_policy_association.SecurityhubConfigurationPolicyAssociationConfig;

SecurityhubConfigurationPolicyAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .policyId(java.lang.String)
    .targetId(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(SecurityhubConfigurationPolicyAssociationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | The universally unique identifier (UUID) of the configuration policy, or SELF_MANAGED_SECURITY_HUB for a self-managed configuration. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.targetId">targetId</a></code> | <code>java.lang.String</code> | The identifier of the target account, organizational unit, or the root to associate with the specified configuration. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#id SecurityhubConfigurationPolicyAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

The universally unique identifier (UUID) of the configuration policy, or SELF_MANAGED_SECURITY_HUB for a self-managed configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#policy_id SecurityhubConfigurationPolicyAssociation#policy_id}

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

The identifier of the target account, organizational unit, or the root to associate with the specified configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#target_id SecurityhubConfigurationPolicyAssociation#target_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#id SecurityhubConfigurationPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#region SecurityhubConfigurationPolicyAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationConfig.property.timeouts"></a>

```java
public SecurityhubConfigurationPolicyAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#timeouts SecurityhubConfigurationPolicyAssociation#timeouts}

---

### SecurityhubConfigurationPolicyAssociationTimeouts <a name="SecurityhubConfigurationPolicyAssociationTimeouts" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_configuration_policy_association.SecurityhubConfigurationPolicyAssociationTimeouts;

SecurityhubConfigurationPolicyAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#create SecurityhubConfigurationPolicyAssociation#create}. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#update SecurityhubConfigurationPolicyAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#create SecurityhubConfigurationPolicyAssociation#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.45.0/docs/resources/securityhub_configuration_policy_association#update SecurityhubConfigurationPolicyAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference <a name="SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.securityhub_configuration_policy_association.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference;

new SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SecurityhubConfigurationPolicyAssociationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.securityhubConfigurationPolicyAssociation.SecurityhubConfigurationPolicyAssociationTimeouts">SecurityhubConfigurationPolicyAssociationTimeouts</a>

---



