# `networksecuritymanagerPolicy` Submodule <a name="`networksecuritymanagerPolicy` Submodule" id="@cdktn/provider-aws.networksecuritymanagerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerPolicy <a name="NetworksecuritymanagerPolicy" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy aws_networksecuritymanager_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicy;

NetworksecuritymanagerPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .firewallType(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
//  .configuration(IResolvable|java.util.List<NetworksecuritymanagerPolicyConfiguration>)
//  .description(java.lang.String)
//  .isPublished(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .templateOrRule(IResolvable|java.util.List<NetworksecuritymanagerPolicyTemplateOrRule>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.firewallType">firewallType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#name NetworksecuritymanagerPolicy#name}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.configuration">configuration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#description NetworksecuritymanagerPolicy#description}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.isPublished">isPublished</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#is_published NetworksecuritymanagerPolicy#is_published}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.templateOrRule">templateOrRule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>></code> | template_or_rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.firewallType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#name NetworksecuritymanagerPolicy#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.configuration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#configuration NetworksecuritymanagerPolicy#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#description NetworksecuritymanagerPolicy#description}.

---

##### `isPublished`<sup>Optional</sup> <a name="isPublished" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.isPublished"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#is_published NetworksecuritymanagerPolicy#is_published}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#region NetworksecuritymanagerPolicy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}.

---

##### `templateOrRule`<sup>Optional</sup> <a name="templateOrRule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.templateOrRule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>>

template_or_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#template_or_rule NetworksecuritymanagerPolicy#template_or_rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putConfiguration">putConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTemplateOrRule">putTemplateOrRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetIsPublished">resetIsPublished</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTemplateOrRule">resetTemplateOrRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfiguration` <a name="putConfiguration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putConfiguration"></a>

```java
public void putConfiguration(IResolvable|java.util.List<NetworksecuritymanagerPolicyConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>>

---

##### `putTemplateOrRule` <a name="putTemplateOrRule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTemplateOrRule"></a>

```java
public void putTemplateOrRule(IResolvable|java.util.List<NetworksecuritymanagerPolicyTemplateOrRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTemplateOrRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>>

---

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetConfiguration"></a>

```java
public void resetConfiguration()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIsPublished` <a name="resetIsPublished" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetIsPublished"></a>

```java
public void resetIsPublished()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags"></a>

```java
public void resetTags()
```

##### `resetTemplateOrRule` <a name="resetTemplateOrRule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTemplateOrRule"></a>

```java
public void resetTemplateOrRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicy;

NetworksecuritymanagerPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicy;

NetworksecuritymanagerPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicy;

NetworksecuritymanagerPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicy;

NetworksecuritymanagerPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworksecuritymanagerPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworksecuritymanagerPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworksecuritymanagerPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList">NetworksecuritymanagerPolicyConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.templateOrRule">templateOrRule</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList">NetworksecuritymanagerPolicyTemplateOrRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.configurationInput">configurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput">firewallTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.isPublishedInput">isPublishedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.templateOrRuleInput">templateOrRuleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType">firewallType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.isPublished">isPublished</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.configuration"></a>

```java
public NetworksecuritymanagerPolicyConfigurationList getConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList">NetworksecuritymanagerPolicyConfigurationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `templateOrRule`<sup>Required</sup> <a name="templateOrRule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.templateOrRule"></a>

```java
public NetworksecuritymanagerPolicyTemplateOrRuleList getTemplateOrRule();
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList">NetworksecuritymanagerPolicyTemplateOrRuleList</a>

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.configurationInput"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyConfiguration> getConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `firewallTypeInput`<sup>Optional</sup> <a name="firewallTypeInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput"></a>

```java
public java.lang.String getFirewallTypeInput();
```

- *Type:* java.lang.String

---

##### `isPublishedInput`<sup>Optional</sup> <a name="isPublishedInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.isPublishedInput"></a>

```java
public java.lang.Boolean|IResolvable getIsPublishedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `templateOrRuleInput`<sup>Optional</sup> <a name="templateOrRuleInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.templateOrRuleInput"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyTemplateOrRule> getTemplateOrRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType"></a>

```java
public java.lang.String getFirewallType();
```

- *Type:* java.lang.String

---

##### `isPublished`<sup>Required</sup> <a name="isPublished" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.isPublished"></a>

```java
public java.lang.Boolean|IResolvable getIsPublished();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerPolicyConfig <a name="NetworksecuritymanagerPolicyConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicyConfig;

NetworksecuritymanagerPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .firewallType(java.lang.String)
    .name(java.lang.String)
    .priority(java.lang.Number)
//  .configuration(IResolvable|java.util.List<NetworksecuritymanagerPolicyConfiguration>)
//  .description(java.lang.String)
//  .isPublished(java.lang.Boolean|IResolvable)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .templateOrRule(IResolvable|java.util.List<NetworksecuritymanagerPolicyTemplateOrRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType">firewallType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#name NetworksecuritymanagerPolicy#name}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.configuration">configuration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>></code> | configuration block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#description NetworksecuritymanagerPolicy#description}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.isPublished">isPublished</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#is_published NetworksecuritymanagerPolicy#is_published}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.templateOrRule">templateOrRule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>></code> | template_or_rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType"></a>

```java
public java.lang.String getFirewallType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#name NetworksecuritymanagerPolicy#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.configuration"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyConfiguration> getConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>>

configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#configuration NetworksecuritymanagerPolicy#configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#description NetworksecuritymanagerPolicy#description}.

---

##### `isPublished`<sup>Optional</sup> <a name="isPublished" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.isPublished"></a>

```java
public java.lang.Boolean|IResolvable getIsPublished();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#is_published NetworksecuritymanagerPolicy#is_published}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#region NetworksecuritymanagerPolicy#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}.

---

##### `templateOrRule`<sup>Optional</sup> <a name="templateOrRule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.templateOrRule"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyTemplateOrRule> getTemplateOrRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>>

template_or_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#template_or_rule NetworksecuritymanagerPolicy#template_or_rule}

---

### NetworksecuritymanagerPolicyConfiguration <a name="NetworksecuritymanagerPolicyConfiguration" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicyConfiguration;

NetworksecuritymanagerPolicyConfiguration.builder()
    .remediationEnabled(java.lang.Boolean|IResolvable)
    .resourcesCleanUp(java.lang.Boolean|IResolvable)
//  .wafConfig(IResolvable|java.util.List<NetworksecuritymanagerPolicyConfigurationWafConfig>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.remediationEnabled">remediationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#remediation_enabled NetworksecuritymanagerPolicy#remediation_enabled}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.resourcesCleanUp">resourcesCleanUp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#resources_clean_up NetworksecuritymanagerPolicy#resources_clean_up}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.wafConfig">wafConfig</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>></code> | waf_config block. |

---

##### `remediationEnabled`<sup>Required</sup> <a name="remediationEnabled" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.remediationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRemediationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#remediation_enabled NetworksecuritymanagerPolicy#remediation_enabled}.

---

##### `resourcesCleanUp`<sup>Required</sup> <a name="resourcesCleanUp" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.resourcesCleanUp"></a>

```java
public java.lang.Boolean|IResolvable getResourcesCleanUp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#resources_clean_up NetworksecuritymanagerPolicy#resources_clean_up}.

---

##### `wafConfig`<sup>Optional</sup> <a name="wafConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration.property.wafConfig"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyConfigurationWafConfig> getWafConfig();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>>

waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#waf_config NetworksecuritymanagerPolicy#waf_config}

---

### NetworksecuritymanagerPolicyConfigurationWafConfig <a name="NetworksecuritymanagerPolicyConfigurationWafConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicyConfigurationWafConfig;

NetworksecuritymanagerPolicyConfigurationWafConfig.builder()
    .conflictResolution(java.lang.String)
    .existingCustomerWebAclResolution(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.property.conflictResolution">conflictResolution</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#conflict_resolution NetworksecuritymanagerPolicy#conflict_resolution}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution">existingCustomerWebAclResolution</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution NetworksecuritymanagerPolicy#existing_customer_web_acl_resolution}. |

---

##### `conflictResolution`<sup>Required</sup> <a name="conflictResolution" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.property.conflictResolution"></a>

```java
public java.lang.String getConflictResolution();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#conflict_resolution NetworksecuritymanagerPolicy#conflict_resolution}.

---

##### `existingCustomerWebAclResolution`<sup>Required</sup> <a name="existingCustomerWebAclResolution" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution"></a>

```java
public java.lang.String getExistingCustomerWebAclResolution();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution NetworksecuritymanagerPolicy#existing_customer_web_acl_resolution}.

---

### NetworksecuritymanagerPolicyTemplateOrRule <a name="NetworksecuritymanagerPolicyTemplateOrRule" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicyTemplateOrRule;

NetworksecuritymanagerPolicyTemplateOrRule.builder()
//  .ruleIdentifier(java.lang.String)
//  .templateIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.property.ruleIdentifier">ruleIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#rule_identifier NetworksecuritymanagerPolicy#rule_identifier}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.property.templateIdentifier">templateIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#template_identifier NetworksecuritymanagerPolicy#template_identifier}. |

---

##### `ruleIdentifier`<sup>Optional</sup> <a name="ruleIdentifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.property.ruleIdentifier"></a>

```java
public java.lang.String getRuleIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#rule_identifier NetworksecuritymanagerPolicy#rule_identifier}.

---

##### `templateIdentifier`<sup>Optional</sup> <a name="templateIdentifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule.property.templateIdentifier"></a>

```java
public java.lang.String getTemplateIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_policy#template_identifier NetworksecuritymanagerPolicy#template_identifier}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerPolicyConfigurationList <a name="NetworksecuritymanagerPolicyConfigurationList" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicyConfigurationList;

new NetworksecuritymanagerPolicyConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.get"></a>

```java
public NetworksecuritymanagerPolicyConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>>

---


### NetworksecuritymanagerPolicyConfigurationOutputReference <a name="NetworksecuritymanagerPolicyConfigurationOutputReference" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicyConfigurationOutputReference;

new NetworksecuritymanagerPolicyConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.putWafConfig">putWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resetWafConfig">resetWafConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWafConfig` <a name="putWafConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.putWafConfig"></a>

```java
public void putWafConfig(IResolvable|java.util.List<NetworksecuritymanagerPolicyConfigurationWafConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.putWafConfig.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>>

---

##### `resetWafConfig` <a name="resetWafConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.resetWafConfig"></a>

```java
public void resetWafConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.wafConfig">wafConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList">NetworksecuritymanagerPolicyConfigurationWafConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.remediationEnabledInput">remediationEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.resourcesCleanUpInput">resourcesCleanUpInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.wafConfigInput">wafConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.remediationEnabled">remediationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.resourcesCleanUp">resourcesCleanUp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `wafConfig`<sup>Required</sup> <a name="wafConfig" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.wafConfig"></a>

```java
public NetworksecuritymanagerPolicyConfigurationWafConfigList getWafConfig();
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList">NetworksecuritymanagerPolicyConfigurationWafConfigList</a>

---

##### `remediationEnabledInput`<sup>Optional</sup> <a name="remediationEnabledInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.remediationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRemediationEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourcesCleanUpInput`<sup>Optional</sup> <a name="resourcesCleanUpInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.resourcesCleanUpInput"></a>

```java
public java.lang.Boolean|IResolvable getResourcesCleanUpInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `wafConfigInput`<sup>Optional</sup> <a name="wafConfigInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.wafConfigInput"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyConfigurationWafConfig> getWafConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>>

---

##### `remediationEnabled`<sup>Required</sup> <a name="remediationEnabled" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.remediationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRemediationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `resourcesCleanUp`<sup>Required</sup> <a name="resourcesCleanUp" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.resourcesCleanUp"></a>

```java
public java.lang.Boolean|IResolvable getResourcesCleanUp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerPolicyConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfiguration">NetworksecuritymanagerPolicyConfiguration</a>

---


### NetworksecuritymanagerPolicyConfigurationWafConfigList <a name="NetworksecuritymanagerPolicyConfigurationWafConfigList" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicyConfigurationWafConfigList;

new NetworksecuritymanagerPolicyConfigurationWafConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.get"></a>

```java
public NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyConfigurationWafConfig> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>>

---


### NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference <a name="NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference;

new NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput">conflictResolutionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput">existingCustomerWebAclResolutionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.conflictResolution">conflictResolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution">existingCustomerWebAclResolution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conflictResolutionInput`<sup>Optional</sup> <a name="conflictResolutionInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput"></a>

```java
public java.lang.String getConflictResolutionInput();
```

- *Type:* java.lang.String

---

##### `existingCustomerWebAclResolutionInput`<sup>Optional</sup> <a name="existingCustomerWebAclResolutionInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput"></a>

```java
public java.lang.String getExistingCustomerWebAclResolutionInput();
```

- *Type:* java.lang.String

---

##### `conflictResolution`<sup>Required</sup> <a name="conflictResolution" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.conflictResolution"></a>

```java
public java.lang.String getConflictResolution();
```

- *Type:* java.lang.String

---

##### `existingCustomerWebAclResolution`<sup>Required</sup> <a name="existingCustomerWebAclResolution" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution"></a>

```java
public java.lang.String getExistingCustomerWebAclResolution();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerPolicyConfigurationWafConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyConfigurationWafConfig</a>

---


### NetworksecuritymanagerPolicyTemplateOrRuleList <a name="NetworksecuritymanagerPolicyTemplateOrRuleList" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicyTemplateOrRuleList;

new NetworksecuritymanagerPolicyTemplateOrRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.get"></a>

```java
public NetworksecuritymanagerPolicyTemplateOrRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<NetworksecuritymanagerPolicyTemplateOrRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>>

---


### NetworksecuritymanagerPolicyTemplateOrRuleOutputReference <a name="NetworksecuritymanagerPolicyTemplateOrRuleOutputReference" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.networksecuritymanager_policy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference;

new NetworksecuritymanagerPolicyTemplateOrRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resetRuleIdentifier">resetRuleIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resetTemplateIdentifier">resetTemplateIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRuleIdentifier` <a name="resetRuleIdentifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resetRuleIdentifier"></a>

```java
public void resetRuleIdentifier()
```

##### `resetTemplateIdentifier` <a name="resetTemplateIdentifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.resetTemplateIdentifier"></a>

```java
public void resetTemplateIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.ruleIdentifierInput">ruleIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.templateIdentifierInput">templateIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.ruleIdentifier">ruleIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.templateIdentifier">templateIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ruleIdentifierInput`<sup>Optional</sup> <a name="ruleIdentifierInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.ruleIdentifierInput"></a>

```java
public java.lang.String getRuleIdentifierInput();
```

- *Type:* java.lang.String

---

##### `templateIdentifierInput`<sup>Optional</sup> <a name="templateIdentifierInput" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.templateIdentifierInput"></a>

```java
public java.lang.String getTemplateIdentifierInput();
```

- *Type:* java.lang.String

---

##### `ruleIdentifier`<sup>Required</sup> <a name="ruleIdentifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.ruleIdentifier"></a>

```java
public java.lang.String getRuleIdentifier();
```

- *Type:* java.lang.String

---

##### `templateIdentifier`<sup>Required</sup> <a name="templateIdentifier" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.templateIdentifier"></a>

```java
public java.lang.String getTemplateIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|NetworksecuritymanagerPolicyTemplateOrRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTemplateOrRule">NetworksecuritymanagerPolicyTemplateOrRule</a>

---



