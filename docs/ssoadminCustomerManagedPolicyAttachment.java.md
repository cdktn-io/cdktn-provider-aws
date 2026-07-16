# `ssoadminCustomerManagedPolicyAttachment` Submodule <a name="`ssoadminCustomerManagedPolicyAttachment` Submodule" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminCustomerManagedPolicyAttachment <a name="SsoadminCustomerManagedPolicyAttachment" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment aws_ssoadmin_customer_managed_policy_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer"></a>

```java
import io.cdktn.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachment;

SsoadminCustomerManagedPolicyAttachment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .customerManagedPolicyReference(SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference)
    .instanceArn(java.lang.String)
    .permissionSetArn(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(SsoadminCustomerManagedPolicyAttachmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a></code> | customer_managed_policy_reference block. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#instance_arn SsoadminCustomerManagedPolicyAttachment#instance_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.permissionSetArn">permissionSetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#permission_set_arn SsoadminCustomerManagedPolicyAttachment#permission_set_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#id SsoadminCustomerManagedPolicyAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customerManagedPolicyReference`<sup>Required</sup> <a name="customerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.customerManagedPolicyReference"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

customer_managed_policy_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#customer_managed_policy_reference SsoadminCustomerManagedPolicyAttachment#customer_managed_policy_reference}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#instance_arn SsoadminCustomerManagedPolicyAttachment#instance_arn}.

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.permissionSetArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#permission_set_arn SsoadminCustomerManagedPolicyAttachment#permission_set_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#id SsoadminCustomerManagedPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#region SsoadminCustomerManagedPolicyAttachment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#timeouts SsoadminCustomerManagedPolicyAttachment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putCustomerManagedPolicyReference">putCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerManagedPolicyReference` <a name="putCustomerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putCustomerManagedPolicyReference"></a>

```java
public void putCustomerManagedPolicyReference(SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putCustomerManagedPolicyReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putTimeouts"></a>

```java
public void putTimeouts(SsoadminCustomerManagedPolicyAttachmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SsoadminCustomerManagedPolicyAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isConstruct"></a>

```java
import io.cdktn.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachment;

SsoadminCustomerManagedPolicyAttachment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachment;

SsoadminCustomerManagedPolicyAttachment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachment;

SsoadminCustomerManagedPolicyAttachment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachment;

SsoadminCustomerManagedPolicyAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SsoadminCustomerManagedPolicyAttachment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SsoadminCustomerManagedPolicyAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SsoadminCustomerManagedPolicyAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SsoadminCustomerManagedPolicyAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SsoadminCustomerManagedPolicyAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference">SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.customerManagedPolicyReferenceInput">customerManagedPolicyReferenceInput</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.permissionSetArnInput">permissionSetArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.permissionSetArn">permissionSetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customerManagedPolicyReference`<sup>Required</sup> <a name="customerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.customerManagedPolicyReference"></a>

```java
public SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference getCustomerManagedPolicyReference();
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.timeouts"></a>

```java
public SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference">SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference</a>

---

##### `customerManagedPolicyReferenceInput`<sup>Optional</sup> <a name="customerManagedPolicyReferenceInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.customerManagedPolicyReferenceInput"></a>

```java
public SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference getCustomerManagedPolicyReferenceInput();
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `permissionSetArnInput`<sup>Optional</sup> <a name="permissionSetArnInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.permissionSetArnInput"></a>

```java
public java.lang.String getPermissionSetArnInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.timeoutsInput"></a>

```java
public IResolvable|SsoadminCustomerManagedPolicyAttachmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.permissionSetArn"></a>

```java
public java.lang.String getPermissionSetArn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminCustomerManagedPolicyAttachmentConfig <a name="SsoadminCustomerManagedPolicyAttachmentConfig" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachmentConfig;

SsoadminCustomerManagedPolicyAttachmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .customerManagedPolicyReference(SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference)
    .instanceArn(java.lang.String)
    .permissionSetArn(java.lang.String)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(SsoadminCustomerManagedPolicyAttachmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a></code> | customer_managed_policy_reference block. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#instance_arn SsoadminCustomerManagedPolicyAttachment#instance_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.permissionSetArn">permissionSetArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#permission_set_arn SsoadminCustomerManagedPolicyAttachment#permission_set_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#id SsoadminCustomerManagedPolicyAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `customerManagedPolicyReference`<sup>Required</sup> <a name="customerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.customerManagedPolicyReference"></a>

```java
public SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference getCustomerManagedPolicyReference();
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

customer_managed_policy_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#customer_managed_policy_reference SsoadminCustomerManagedPolicyAttachment#customer_managed_policy_reference}

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#instance_arn SsoadminCustomerManagedPolicyAttachment#instance_arn}.

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.permissionSetArn"></a>

```java
public java.lang.String getPermissionSetArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#permission_set_arn SsoadminCustomerManagedPolicyAttachment#permission_set_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#id SsoadminCustomerManagedPolicyAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#region SsoadminCustomerManagedPolicyAttachment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentConfig.property.timeouts"></a>

```java
public SsoadminCustomerManagedPolicyAttachmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#timeouts SsoadminCustomerManagedPolicyAttachment#timeouts}

---

### SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference <a name="SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference;

SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.builder()
    .name(java.lang.String)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#name SsoadminCustomerManagedPolicyAttachment#name}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#path SsoadminCustomerManagedPolicyAttachment#path}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#name SsoadminCustomerManagedPolicyAttachment#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#path SsoadminCustomerManagedPolicyAttachment#path}.

---

### SsoadminCustomerManagedPolicyAttachmentTimeouts <a name="SsoadminCustomerManagedPolicyAttachmentTimeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachmentTimeouts;

SsoadminCustomerManagedPolicyAttachmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#create SsoadminCustomerManagedPolicyAttachment#create}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#delete SsoadminCustomerManagedPolicyAttachment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#create SsoadminCustomerManagedPolicyAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/resources/ssoadmin_customer_managed_policy_attachment#delete SsoadminCustomerManagedPolicyAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference <a name="SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference;

new SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReferenceOutputReference.property.internalValue"></a>

```java
public SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentCustomerManagedPolicyReference</a>

---


### SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference <a name="SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.ssoadmin_customer_managed_policy_attachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference;

new SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|SsoadminCustomerManagedPolicyAttachmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachment.SsoadminCustomerManagedPolicyAttachmentTimeouts">SsoadminCustomerManagedPolicyAttachmentTimeouts</a>

---



