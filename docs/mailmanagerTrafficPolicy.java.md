# `mailmanagerTrafficPolicy` Submodule <a name="`mailmanagerTrafficPolicy` Submodule" id="@cdktn/provider-aws.mailmanagerTrafficPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MailmanagerTrafficPolicy <a name="MailmanagerTrafficPolicy" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy aws_mailmanager_traffic_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicy;

MailmanagerTrafficPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultAction(java.lang.String)
    .name(java.lang.String)
//  .maxMessageSizeBytes(java.lang.Number)
//  .policyStatement(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatement>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#default_action MailmanagerTrafficPolicy#default_action}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#name MailmanagerTrafficPolicy#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.maxMessageSizeBytes">maxMessageSizeBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#max_message_size_bytes MailmanagerTrafficPolicy#max_message_size_bytes}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.policyStatement">policyStatement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>></code> | policy_statement block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#tags MailmanagerTrafficPolicy#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.defaultAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#default_action MailmanagerTrafficPolicy#default_action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#name MailmanagerTrafficPolicy#name}.

---

##### `maxMessageSizeBytes`<sup>Optional</sup> <a name="maxMessageSizeBytes" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.maxMessageSizeBytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#max_message_size_bytes MailmanagerTrafficPolicy#max_message_size_bytes}.

---

##### `policyStatement`<sup>Optional</sup> <a name="policyStatement" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.policyStatement"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>>

policy_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#policy_statement MailmanagerTrafficPolicy#policy_statement}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#region MailmanagerTrafficPolicy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#tags MailmanagerTrafficPolicy#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.putPolicyStatement">putPolicyStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetMaxMessageSizeBytes">resetMaxMessageSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetPolicyStatement">resetPolicyStatement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyStatement` <a name="putPolicyStatement" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.putPolicyStatement"></a>

```java
public void putPolicyStatement(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatement> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.putPolicyStatement.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>>

---

##### `resetMaxMessageSizeBytes` <a name="resetMaxMessageSizeBytes" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetMaxMessageSizeBytes"></a>

```java
public void resetMaxMessageSizeBytes()
```

##### `resetPolicyStatement` <a name="resetPolicyStatement" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetPolicyStatement"></a>

```java
public void resetPolicyStatement()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MailmanagerTrafficPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isConstruct"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicy;

MailmanagerTrafficPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicy;

MailmanagerTrafficPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicy;

MailmanagerTrafficPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicy;

MailmanagerTrafficPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MailmanagerTrafficPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MailmanagerTrafficPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MailmanagerTrafficPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MailmanagerTrafficPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MailmanagerTrafficPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.policyStatement">policyStatement</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList">MailmanagerTrafficPolicyPolicyStatementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.defaultActionInput">defaultActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.maxMessageSizeBytesInput">maxMessageSizeBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.policyStatementInput">policyStatementInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.maxMessageSizeBytes">maxMessageSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.lastUpdatedTimestamp"></a>

```java
public java.lang.String getLastUpdatedTimestamp();
```

- *Type:* java.lang.String

---

##### `policyStatement`<sup>Required</sup> <a name="policyStatement" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.policyStatement"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementList getPolicyStatement();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList">MailmanagerTrafficPolicyPolicyStatementList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.defaultActionInput"></a>

```java
public java.lang.String getDefaultActionInput();
```

- *Type:* java.lang.String

---

##### `maxMessageSizeBytesInput`<sup>Optional</sup> <a name="maxMessageSizeBytesInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.maxMessageSizeBytesInput"></a>

```java
public java.lang.Number getMaxMessageSizeBytesInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `policyStatementInput`<sup>Optional</sup> <a name="policyStatementInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.policyStatementInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatement> getPolicyStatementInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

---

##### `maxMessageSizeBytes`<sup>Required</sup> <a name="maxMessageSizeBytes" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.maxMessageSizeBytes"></a>

```java
public java.lang.Number getMaxMessageSizeBytes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MailmanagerTrafficPolicyConfig <a name="MailmanagerTrafficPolicyConfig" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyConfig;

MailmanagerTrafficPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .defaultAction(java.lang.String)
    .name(java.lang.String)
//  .maxMessageSizeBytes(java.lang.Number)
//  .policyStatement(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatement>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.defaultAction">defaultAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#default_action MailmanagerTrafficPolicy#default_action}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#name MailmanagerTrafficPolicy#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.maxMessageSizeBytes">maxMessageSizeBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#max_message_size_bytes MailmanagerTrafficPolicy#max_message_size_bytes}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.policyStatement">policyStatement</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>></code> | policy_statement block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#tags MailmanagerTrafficPolicy#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.defaultAction"></a>

```java
public java.lang.String getDefaultAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#default_action MailmanagerTrafficPolicy#default_action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#name MailmanagerTrafficPolicy#name}.

---

##### `maxMessageSizeBytes`<sup>Optional</sup> <a name="maxMessageSizeBytes" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.maxMessageSizeBytes"></a>

```java
public java.lang.Number getMaxMessageSizeBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#max_message_size_bytes MailmanagerTrafficPolicy#max_message_size_bytes}.

---

##### `policyStatement`<sup>Optional</sup> <a name="policyStatement" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.policyStatement"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatement> getPolicyStatement();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>>

policy_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#policy_statement MailmanagerTrafficPolicy#policy_statement}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#region MailmanagerTrafficPolicy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#tags MailmanagerTrafficPolicy#tags}.

---

### MailmanagerTrafficPolicyPolicyStatement <a name="MailmanagerTrafficPolicyPolicyStatement" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatement;

MailmanagerTrafficPolicyPolicyStatement.builder()
    .action(java.lang.String)
//  .condition(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementCondition>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#action MailmanagerTrafficPolicy#action}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement.property.condition">condition</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>></code> | condition block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#action MailmanagerTrafficPolicy#action}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement.property.condition"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementCondition> getCondition();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#condition MailmanagerTrafficPolicy#condition}

---

### MailmanagerTrafficPolicyPolicyStatementCondition <a name="MailmanagerTrafficPolicyPolicyStatementCondition" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementCondition;

MailmanagerTrafficPolicyPolicyStatementCondition.builder()
//  .booleanExpression(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression>)
//  .ipExpression(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpExpression>)
//  .ipv6Expression(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression>)
//  .stringExpression(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpression>)
//  .tlsExpression(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.booleanExpression">booleanExpression</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>></code> | boolean_expression block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.ipExpression">ipExpression</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>></code> | ip_expression block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.ipv6Expression">ipv6Expression</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>></code> | ipv6_expression block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.stringExpression">stringExpression</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>></code> | string_expression block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.tlsExpression">tlsExpression</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>></code> | tls_expression block. |

---

##### `booleanExpression`<sup>Optional</sup> <a name="booleanExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.booleanExpression"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression> getBooleanExpression();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>>

boolean_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#boolean_expression MailmanagerTrafficPolicy#boolean_expression}

---

##### `ipExpression`<sup>Optional</sup> <a name="ipExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.ipExpression"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpExpression> getIpExpression();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>>

ip_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#ip_expression MailmanagerTrafficPolicy#ip_expression}

---

##### `ipv6Expression`<sup>Optional</sup> <a name="ipv6Expression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.ipv6Expression"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression> getIpv6Expression();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>>

ipv6_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#ipv6_expression MailmanagerTrafficPolicy#ipv6_expression}

---

##### `stringExpression`<sup>Optional</sup> <a name="stringExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.stringExpression"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpression> getStringExpression();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>>

string_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#string_expression MailmanagerTrafficPolicy#string_expression}

---

##### `tlsExpression`<sup>Optional</sup> <a name="tlsExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition.property.tlsExpression"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression> getTlsExpression();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>>

tls_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#tls_expression MailmanagerTrafficPolicy#tls_expression}

---

### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression;

MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression.builder()
    .operator(java.lang.String)
//  .evaluate(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression.property.evaluate">evaluate</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>></code> | evaluate block. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}.

---

##### `evaluate`<sup>Optional</sup> <a name="evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression.property.evaluate"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate> getEvaluate();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>>

evaluate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}

---

### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate;

MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate.builder()
//  .analysis(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis>)
//  .isInAddressList(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate.property.analysis">analysis</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>></code> | analysis block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate.property.isInAddressList">isInAddressList</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>></code> | is_in_address_list block. |

---

##### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate.property.analysis"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis> getAnalysis();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>>

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#analysis MailmanagerTrafficPolicy#analysis}

---

##### `isInAddressList`<sup>Optional</sup> <a name="isInAddressList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate.property.isInAddressList"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct> getIsInAddressList();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>>

is_in_address_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#is_in_address_list MailmanagerTrafficPolicy#is_in_address_list}

---

### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis;

MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis.builder()
    .analyzer(java.lang.String)
    .resultField(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis.property.analyzer">analyzer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#analyzer MailmanagerTrafficPolicy#analyzer}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis.property.resultField">resultField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#result_field MailmanagerTrafficPolicy#result_field}. |

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis.property.analyzer"></a>

```java
public java.lang.String getAnalyzer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#analyzer MailmanagerTrafficPolicy#analyzer}.

---

##### `resultField`<sup>Required</sup> <a name="resultField" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis.property.resultField"></a>

```java
public java.lang.String getResultField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#result_field MailmanagerTrafficPolicy#result_field}.

---

### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct;

MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct.builder()
    .addressLists(java.util.List<java.lang.String>)
    .attribute(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct.property.addressLists">addressLists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#address_lists MailmanagerTrafficPolicy#address_lists}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}. |

---

##### `addressLists`<sup>Required</sup> <a name="addressLists" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct.property.addressLists"></a>

```java
public java.util.List<java.lang.String> getAddressLists();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#address_lists MailmanagerTrafficPolicy#address_lists}.

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}.

---

### MailmanagerTrafficPolicyPolicyStatementConditionIpExpression <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression;

MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .evaluate(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.property.evaluate">evaluate</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>></code> | evaluate block. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}.

---

##### `evaluate`<sup>Optional</sup> <a name="evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression.property.evaluate"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate> getEvaluate();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>>

evaluate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}

---

### MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate;

MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate.builder()
    .attribute(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}.

---

### MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression;

MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .evaluate(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.property.evaluate">evaluate</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>></code> | evaluate block. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}.

---

##### `evaluate`<sup>Optional</sup> <a name="evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression.property.evaluate"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate> getEvaluate();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>>

evaluate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}

---

### MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate;

MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate.builder()
    .attribute(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}.

---

### MailmanagerTrafficPolicyPolicyStatementConditionStringExpression <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression;

MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.builder()
    .operator(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .evaluate(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.property.evaluate">evaluate</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>></code> | evaluate block. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#values MailmanagerTrafficPolicy#values}.

---

##### `evaluate`<sup>Optional</sup> <a name="evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression.property.evaluate"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate> getEvaluate();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>>

evaluate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}

---

### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate;

MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate.builder()
//  .analysis(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis>)
//  .attribute(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate.property.analysis">analysis</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>></code> | analysis block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}. |

---

##### `analysis`<sup>Optional</sup> <a name="analysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate.property.analysis"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis> getAnalysis();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>>

analysis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#analysis MailmanagerTrafficPolicy#analysis}

---

##### `attribute`<sup>Optional</sup> <a name="attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}.

---

### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis;

MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis.builder()
    .analyzer(java.lang.String)
    .resultField(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis.property.analyzer">analyzer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#analyzer MailmanagerTrafficPolicy#analyzer}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis.property.resultField">resultField</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#result_field MailmanagerTrafficPolicy#result_field}. |

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis.property.analyzer"></a>

```java
public java.lang.String getAnalyzer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#analyzer MailmanagerTrafficPolicy#analyzer}.

---

##### `resultField`<sup>Required</sup> <a name="resultField" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis.property.resultField"></a>

```java
public java.lang.String getResultField();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#result_field MailmanagerTrafficPolicy#result_field}.

---

### MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression <a name="MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression;

MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.builder()
    .operator(java.lang.String)
    .value(java.lang.String)
//  .evaluate(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#value MailmanagerTrafficPolicy#value}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.property.evaluate">evaluate</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>></code> | evaluate block. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#operator MailmanagerTrafficPolicy#operator}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#value MailmanagerTrafficPolicy#value}.

---

##### `evaluate`<sup>Optional</sup> <a name="evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression.property.evaluate"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate> getEvaluate();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>>

evaluate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#evaluate MailmanagerTrafficPolicy#evaluate}

---

### MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate <a name="MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate;

MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate.builder()
    .attribute(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate.property.attribute">attribute</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_traffic_policy#attribute MailmanagerTrafficPolicy#attribute}.

---

## Classes <a name="Classes" id="Classes"></a>

### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.analyzerInput">analyzerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.resultFieldInput">resultFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.resultField">resultField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `analyzerInput`<sup>Optional</sup> <a name="analyzerInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.analyzerInput"></a>

```java
public java.lang.String getAnalyzerInput();
```

- *Type:* java.lang.String

---

##### `resultFieldInput`<sup>Optional</sup> <a name="resultFieldInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.resultFieldInput"></a>

```java
public java.lang.String getResultFieldInput();
```

- *Type:* java.lang.String

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```java
public java.lang.String getAnalyzer();
```

- *Type:* java.lang.String

---

##### `resultField`<sup>Required</sup> <a name="resultField" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```java
public java.lang.String getResultField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressListsInput">addressListsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists">addressLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressListsInput`<sup>Optional</sup> <a name="addressListsInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressListsInput"></a>

```java
public java.util.List<java.lang.String> getAddressListsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `addressLists`<sup>Required</sup> <a name="addressLists" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.addressLists"></a>

```java
public java.util.List<java.lang.String> getAddressLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.putAnalysis">putAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.putIsInAddressList">putIsInAddressList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resetAnalysis">resetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resetIsInAddressList">resetIsInAddressList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnalysis` <a name="putAnalysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.putAnalysis"></a>

```java
public void putAnalysis(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.putAnalysis.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>>

---

##### `putIsInAddressList` <a name="putIsInAddressList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.putIsInAddressList"></a>

```java
public void putIsInAddressList(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.putIsInAddressList.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>>

---

##### `resetAnalysis` <a name="resetAnalysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resetAnalysis"></a>

```java
public void resetAnalysis()
```

##### `resetIsInAddressList` <a name="resetIsInAddressList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.resetIsInAddressList"></a>

```java
public void resetIsInAddressList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.isInAddressList">isInAddressList</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.analysisInput">analysisInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.isInAddressListInput">isInAddressListInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.analysis"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList getAnalysis();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysisList</a>

---

##### `isInAddressList`<sup>Required</sup> <a name="isInAddressList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.isInAddressList"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList getIsInAddressList();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStructList</a>

---

##### `analysisInput`<sup>Optional</sup> <a name="analysisInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.analysisInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis> getAnalysisInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateAnalysis</a>>

---

##### `isInAddressListInput`<sup>Optional</sup> <a name="isInAddressListInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.isInAddressListInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct> getIsInAddressListInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateIsInAddressListStruct</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.putEvaluate">putEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.resetEvaluate">resetEvaluate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluate` <a name="putEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.putEvaluate"></a>

```java
public void putEvaluate(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>>

---

##### `resetEvaluate` <a name="resetEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.resetEvaluate"></a>

```java
public void resetEvaluate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.evaluateInput">evaluateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.evaluate"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList getEvaluate();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluateList</a>

---

##### `evaluateInput`<sup>Optional</sup> <a name="evaluateInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.evaluateInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate> getEvaluateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionEvaluate</a>>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList;

new MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList;

new MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpExpression> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.putEvaluate">putEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.resetEvaluate">resetEvaluate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluate` <a name="putEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.putEvaluate"></a>

```java
public void putEvaluate(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>>

---

##### `resetEvaluate` <a name="resetEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.resetEvaluate"></a>

```java
public void resetEvaluate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.evaluateInput">evaluateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.evaluate"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList getEvaluate();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluateList</a>

---

##### `evaluateInput`<sup>Optional</sup> <a name="evaluateInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.evaluateInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate> getEvaluateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionEvaluate</a>>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpExpression getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList;

new MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList;

new MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.putEvaluate">putEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.resetEvaluate">resetEvaluate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluate` <a name="putEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.putEvaluate"></a>

```java
public void putEvaluate(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>>

---

##### `resetEvaluate` <a name="resetEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.resetEvaluate"></a>

```java
public void resetEvaluate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.evaluateInput">evaluateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.evaluate"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList getEvaluate();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluateList</a>

---

##### `evaluateInput`<sup>Optional</sup> <a name="evaluateInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.evaluateInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate> getEvaluateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionEvaluate</a>>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionList <a name="MailmanagerTrafficPolicyPolicyStatementConditionList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionList;

new MailmanagerTrafficPolicyPolicyStatementConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementCondition> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putBooleanExpression">putBooleanExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putIpExpression">putIpExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putIpv6Expression">putIpv6Expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putStringExpression">putStringExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putTlsExpression">putTlsExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetBooleanExpression">resetBooleanExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetIpExpression">resetIpExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetIpv6Expression">resetIpv6Expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetStringExpression">resetStringExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetTlsExpression">resetTlsExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBooleanExpression` <a name="putBooleanExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putBooleanExpression"></a>

```java
public void putBooleanExpression(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putBooleanExpression.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>>

---

##### `putIpExpression` <a name="putIpExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putIpExpression"></a>

```java
public void putIpExpression(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpExpression> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putIpExpression.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>>

---

##### `putIpv6Expression` <a name="putIpv6Expression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putIpv6Expression"></a>

```java
public void putIpv6Expression(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putIpv6Expression.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>>

---

##### `putStringExpression` <a name="putStringExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putStringExpression"></a>

```java
public void putStringExpression(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpression> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putStringExpression.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>>

---

##### `putTlsExpression` <a name="putTlsExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putTlsExpression"></a>

```java
public void putTlsExpression(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.putTlsExpression.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>>

---

##### `resetBooleanExpression` <a name="resetBooleanExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetBooleanExpression"></a>

```java
public void resetBooleanExpression()
```

##### `resetIpExpression` <a name="resetIpExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetIpExpression"></a>

```java
public void resetIpExpression()
```

##### `resetIpv6Expression` <a name="resetIpv6Expression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetIpv6Expression"></a>

```java
public void resetIpv6Expression()
```

##### `resetStringExpression` <a name="resetStringExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetStringExpression"></a>

```java
public void resetStringExpression()
```

##### `resetTlsExpression` <a name="resetTlsExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.resetTlsExpression"></a>

```java
public void resetTlsExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.booleanExpression">booleanExpression</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipExpression">ipExpression</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipv6Expression">ipv6Expression</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.stringExpression">stringExpression</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.tlsExpression">tlsExpression</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.booleanExpressionInput">booleanExpressionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipExpressionInput">ipExpressionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipv6ExpressionInput">ipv6ExpressionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.stringExpressionInput">stringExpressionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.tlsExpressionInput">tlsExpressionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `booleanExpression`<sup>Required</sup> <a name="booleanExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.booleanExpression"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList getBooleanExpression();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpressionList</a>

---

##### `ipExpression`<sup>Required</sup> <a name="ipExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipExpression"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList getIpExpression();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionIpExpressionList</a>

---

##### `ipv6Expression`<sup>Required</sup> <a name="ipv6Expression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipv6Expression"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList getIpv6Expression();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionIpv6ExpressionList</a>

---

##### `stringExpression`<sup>Required</sup> <a name="stringExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.stringExpression"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList getStringExpression();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList</a>

---

##### `tlsExpression`<sup>Required</sup> <a name="tlsExpression" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.tlsExpression"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList getTlsExpression();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList</a>

---

##### `booleanExpressionInput`<sup>Optional</sup> <a name="booleanExpressionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.booleanExpressionInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression> getBooleanExpressionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression">MailmanagerTrafficPolicyPolicyStatementConditionBooleanExpression</a>>

---

##### `ipExpressionInput`<sup>Optional</sup> <a name="ipExpressionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipExpressionInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpExpression> getIpExpressionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpExpression">MailmanagerTrafficPolicyPolicyStatementConditionIpExpression</a>>

---

##### `ipv6ExpressionInput`<sup>Optional</sup> <a name="ipv6ExpressionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.ipv6ExpressionInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression> getIpv6ExpressionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression">MailmanagerTrafficPolicyPolicyStatementConditionIpv6Expression</a>>

---

##### `stringExpressionInput`<sup>Optional</sup> <a name="stringExpressionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.stringExpressionInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpression> getStringExpressionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>>

---

##### `tlsExpressionInput`<sup>Optional</sup> <a name="tlsExpressionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.tlsExpressionInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression> getTlsExpressionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.analyzerInput">analyzerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.resultFieldInput">resultFieldInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.analyzer">analyzer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.resultField">resultField</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `analyzerInput`<sup>Optional</sup> <a name="analyzerInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.analyzerInput"></a>

```java
public java.lang.String getAnalyzerInput();
```

- *Type:* java.lang.String

---

##### `resultFieldInput`<sup>Optional</sup> <a name="resultFieldInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.resultFieldInput"></a>

```java
public java.lang.String getResultFieldInput();
```

- *Type:* java.lang.String

---

##### `analyzer`<sup>Required</sup> <a name="analyzer" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.analyzer"></a>

```java
public java.lang.String getAnalyzer();
```

- *Type:* java.lang.String

---

##### `resultField`<sup>Required</sup> <a name="resultField" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.resultField"></a>

```java
public java.lang.String getResultField();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.putAnalysis">putAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resetAnalysis">resetAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resetAttribute">resetAttribute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnalysis` <a name="putAnalysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.putAnalysis"></a>

```java
public void putAnalysis(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.putAnalysis.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>>

---

##### `resetAnalysis` <a name="resetAnalysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resetAnalysis"></a>

```java
public void resetAnalysis()
```

##### `resetAttribute` <a name="resetAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.resetAttribute"></a>

```java
public void resetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.analysis">analysis</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.analysisInput">analysisInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `analysis`<sup>Required</sup> <a name="analysis" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.analysis"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList getAnalysis();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysisList</a>

---

##### `analysisInput`<sup>Optional</sup> <a name="analysisInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.analysisInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis> getAnalysisInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateAnalysis</a>>

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpression> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.putEvaluate">putEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.resetEvaluate">resetEvaluate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluate` <a name="putEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.putEvaluate"></a>

```java
public void putEvaluate(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>>

---

##### `resetEvaluate` <a name="resetEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.resetEvaluate"></a>

```java
public void resetEvaluate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.evaluateInput">evaluateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.evaluate"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList getEvaluate();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluateList</a>

---

##### `evaluateInput`<sup>Optional</sup> <a name="evaluateInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.evaluateInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate> getEvaluateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionEvaluate</a>>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpressionOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionStringExpression getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionStringExpression">MailmanagerTrafficPolicyPolicyStatementConditionStringExpression</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList <a name="MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList;

new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.attributeInput">attributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.attributeInput"></a>

```java
public java.lang.String getAttributeInput();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>

---


### MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList <a name="MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList;

new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>>

---


### MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference;

new MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.putEvaluate">putEvaluate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.resetEvaluate">resetEvaluate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvaluate` <a name="putEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.putEvaluate"></a>

```java
public void putEvaluate(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.putEvaluate.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>>

---

##### `resetEvaluate` <a name="resetEvaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.resetEvaluate"></a>

```java
public void resetEvaluate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.evaluate">evaluate</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.evaluateInput">evaluateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluate`<sup>Required</sup> <a name="evaluate" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.evaluate"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList getEvaluate();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluateList</a>

---

##### `evaluateInput`<sup>Optional</sup> <a name="evaluateInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.evaluateInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate> getEvaluateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionEvaluate</a>>

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpressionOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression">MailmanagerTrafficPolicyPolicyStatementConditionTlsExpression</a>

---


### MailmanagerTrafficPolicyPolicyStatementList <a name="MailmanagerTrafficPolicyPolicyStatementList" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementList;

new MailmanagerTrafficPolicyPolicyStatementList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.get"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatement> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>>

---


### MailmanagerTrafficPolicyPolicyStatementOutputReference <a name="MailmanagerTrafficPolicyPolicyStatementOutputReference" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_traffic_policy.MailmanagerTrafficPolicyPolicyStatementOutputReference;

new MailmanagerTrafficPolicyPolicyStatementOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.resetCondition">resetCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.putCondition"></a>

```java
public void putCondition(IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.putCondition.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.resetCondition"></a>

```java
public void resetCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList">MailmanagerTrafficPolicyPolicyStatementConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.conditionInput">conditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.condition"></a>

```java
public MailmanagerTrafficPolicyPolicyStatementConditionList getCondition();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementConditionList">MailmanagerTrafficPolicyPolicyStatementConditionList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.conditionInput"></a>

```java
public IResolvable|java.util.List<MailmanagerTrafficPolicyPolicyStatementCondition> getConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementCondition">MailmanagerTrafficPolicyPolicyStatementCondition</a>>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatementOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerTrafficPolicyPolicyStatement getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerTrafficPolicy.MailmanagerTrafficPolicyPolicyStatement">MailmanagerTrafficPolicyPolicyStatement</a>

---



