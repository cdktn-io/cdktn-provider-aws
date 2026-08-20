# `mailmanagerIngressPoint` Submodule <a name="`mailmanagerIngressPoint` Submodule" id="@cdktn/provider-aws.mailmanagerIngressPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MailmanagerIngressPoint <a name="MailmanagerIngressPoint" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point aws_mailmanager_ingress_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPoint;

MailmanagerIngressPoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .ruleSetId(java.lang.String)
    .trafficPolicyId(java.lang.String)
    .type(java.lang.String)
//  .ingressPointConfiguration(IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfiguration>)
//  .networkConfiguration(IResolvable|java.util.List<MailmanagerIngressPointNetworkConfiguration>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MailmanagerIngressPointTimeouts)
//  .tlsPolicy(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#name MailmanagerIngressPoint#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.ruleSetId">ruleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#rule_set_id MailmanagerIngressPoint#rule_set_id}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.trafficPolicyId">trafficPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#traffic_policy_id MailmanagerIngressPoint#traffic_policy_id}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#type MailmanagerIngressPoint#type}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.ingressPointConfiguration">ingressPointConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>></code> | ingress_point_configuration block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>></code> | network_configuration block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#tags MailmanagerIngressPoint#tags}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#tls_policy MailmanagerIngressPoint#tls_policy}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#name MailmanagerIngressPoint#name}.

---

##### `ruleSetId`<sup>Required</sup> <a name="ruleSetId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.ruleSetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#rule_set_id MailmanagerIngressPoint#rule_set_id}.

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.trafficPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#traffic_policy_id MailmanagerIngressPoint#traffic_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#type MailmanagerIngressPoint#type}.

---

##### `ingressPointConfiguration`<sup>Optional</sup> <a name="ingressPointConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.ingressPointConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>>

ingress_point_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#ingress_point_configuration MailmanagerIngressPoint#ingress_point_configuration}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.networkConfiguration"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#network_configuration MailmanagerIngressPoint#network_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#region MailmanagerIngressPoint#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#tags MailmanagerIngressPoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#timeouts MailmanagerIngressPoint#timeouts}

---

##### `tlsPolicy`<sup>Optional</sup> <a name="tlsPolicy" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.Initializer.parameter.tlsPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#tls_policy MailmanagerIngressPoint#tls_policy}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putIngressPointConfiguration">putIngressPointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetIngressPointConfiguration">resetIngressPointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTlsPolicy">resetTlsPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngressPointConfiguration` <a name="putIngressPointConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putIngressPointConfiguration"></a>

```java
public void putIngressPointConfiguration(IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putIngressPointConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(IResolvable|java.util.List<MailmanagerIngressPointNetworkConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putNetworkConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putTimeouts"></a>

```java
public void putTimeouts(MailmanagerIngressPointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a>

---

##### `resetIngressPointConfiguration` <a name="resetIngressPointConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetIngressPointConfiguration"></a>

```java
public void resetIngressPointConfiguration()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTlsPolicy` <a name="resetTlsPolicy" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.resetTlsPolicy"></a>

```java
public void resetTlsPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MailmanagerIngressPoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isConstruct"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPoint;

MailmanagerIngressPoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPoint;

MailmanagerIngressPoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPoint;

MailmanagerIngressPoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPoint;

MailmanagerIngressPoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MailmanagerIngressPoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MailmanagerIngressPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MailmanagerIngressPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MailmanagerIngressPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MailmanagerIngressPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.aRecord">aRecord</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.createdTimestamp">createdTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ingressPointConfiguration">ingressPointConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList">MailmanagerIngressPointIngressPointConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference">MailmanagerIngressPointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ingressPointConfigurationInput">ingressPointConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ruleSetIdInput">ruleSetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tlsPolicyInput">tlsPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.trafficPolicyIdInput">trafficPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ruleSetId">ruleSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.trafficPolicyId">trafficPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `aRecord`<sup>Required</sup> <a name="aRecord" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.aRecord"></a>

```java
public java.lang.String getARecord();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.createdTimestamp"></a>

```java
public java.lang.String getCreatedTimestamp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ingressPointConfiguration`<sup>Required</sup> <a name="ingressPointConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ingressPointConfiguration"></a>

```java
public MailmanagerIngressPointIngressPointConfigurationList getIngressPointConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList">MailmanagerIngressPointIngressPointConfigurationList</a>

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.lastUpdatedTimestamp"></a>

```java
public java.lang.String getLastUpdatedTimestamp();
```

- *Type:* java.lang.String

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.networkConfiguration"></a>

```java
public MailmanagerIngressPointNetworkConfigurationList getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.timeouts"></a>

```java
public MailmanagerIngressPointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference">MailmanagerIngressPointTimeoutsOutputReference</a>

---

##### `ingressPointConfigurationInput`<sup>Optional</sup> <a name="ingressPointConfigurationInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ingressPointConfigurationInput"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfiguration> getIngressPointConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.networkConfigurationInput"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointNetworkConfiguration> getNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `ruleSetIdInput`<sup>Optional</sup> <a name="ruleSetIdInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ruleSetIdInput"></a>

```java
public java.lang.String getRuleSetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.timeoutsInput"></a>

```java
public IResolvable|MailmanagerIngressPointTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a>

---

##### `tlsPolicyInput`<sup>Optional</sup> <a name="tlsPolicyInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tlsPolicyInput"></a>

```java
public java.lang.String getTlsPolicyInput();
```

- *Type:* java.lang.String

---

##### `trafficPolicyIdInput`<sup>Optional</sup> <a name="trafficPolicyIdInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.trafficPolicyIdInput"></a>

```java
public java.lang.String getTrafficPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `ruleSetId`<sup>Required</sup> <a name="ruleSetId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.ruleSetId"></a>

```java
public java.lang.String getRuleSetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tlsPolicy`<sup>Required</sup> <a name="tlsPolicy" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tlsPolicy"></a>

```java
public java.lang.String getTlsPolicy();
```

- *Type:* java.lang.String

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.trafficPolicyId"></a>

```java
public java.lang.String getTrafficPolicyId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MailmanagerIngressPointConfig <a name="MailmanagerIngressPointConfig" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointConfig;

MailmanagerIngressPointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .ruleSetId(java.lang.String)
    .trafficPolicyId(java.lang.String)
    .type(java.lang.String)
//  .ingressPointConfiguration(IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfiguration>)
//  .networkConfiguration(IResolvable|java.util.List<MailmanagerIngressPointNetworkConfiguration>)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(MailmanagerIngressPointTimeouts)
//  .tlsPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#name MailmanagerIngressPoint#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.ruleSetId">ruleSetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#rule_set_id MailmanagerIngressPoint#rule_set_id}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.trafficPolicyId">trafficPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#traffic_policy_id MailmanagerIngressPoint#traffic_policy_id}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#type MailmanagerIngressPoint#type}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.ingressPointConfiguration">ingressPointConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>></code> | ingress_point_configuration block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.networkConfiguration">networkConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>></code> | network_configuration block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#tags MailmanagerIngressPoint#tags}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.tlsPolicy">tlsPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#tls_policy MailmanagerIngressPoint#tls_policy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#name MailmanagerIngressPoint#name}.

---

##### `ruleSetId`<sup>Required</sup> <a name="ruleSetId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.ruleSetId"></a>

```java
public java.lang.String getRuleSetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#rule_set_id MailmanagerIngressPoint#rule_set_id}.

---

##### `trafficPolicyId`<sup>Required</sup> <a name="trafficPolicyId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.trafficPolicyId"></a>

```java
public java.lang.String getTrafficPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#traffic_policy_id MailmanagerIngressPoint#traffic_policy_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#type MailmanagerIngressPoint#type}.

---

##### `ingressPointConfiguration`<sup>Optional</sup> <a name="ingressPointConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.ingressPointConfiguration"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfiguration> getIngressPointConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>>

ingress_point_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#ingress_point_configuration MailmanagerIngressPoint#ingress_point_configuration}

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.networkConfiguration"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointNetworkConfiguration> getNetworkConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#network_configuration MailmanagerIngressPoint#network_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#region MailmanagerIngressPoint#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#tags MailmanagerIngressPoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.timeouts"></a>

```java
public MailmanagerIngressPointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#timeouts MailmanagerIngressPoint#timeouts}

---

##### `tlsPolicy`<sup>Optional</sup> <a name="tlsPolicy" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointConfig.property.tlsPolicy"></a>

```java
public java.lang.String getTlsPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#tls_policy MailmanagerIngressPoint#tls_policy}.

---

### MailmanagerIngressPointIngressPointConfiguration <a name="MailmanagerIngressPointIngressPointConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointIngressPointConfiguration;

MailmanagerIngressPointIngressPointConfiguration.builder()
//  .secretArn(java.lang.String)
//  .smtpPasswordWo(java.lang.String)
//  .smtpPasswordWoVersion(java.lang.Number)
//  .tlsAuthConfiguration(IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#secret_arn MailmanagerIngressPoint#secret_arn}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.smtpPasswordWo">smtpPasswordWo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#smtp_password_wo MailmanagerIngressPoint#smtp_password_wo}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.smtpPasswordWoVersion">smtpPasswordWoVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#smtp_password_wo_version MailmanagerIngressPoint#smtp_password_wo_version}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.tlsAuthConfiguration">tlsAuthConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>></code> | tls_auth_configuration block. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#secret_arn MailmanagerIngressPoint#secret_arn}.

---

##### `smtpPasswordWo`<sup>Optional</sup> <a name="smtpPasswordWo" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.smtpPasswordWo"></a>

```java
public java.lang.String getSmtpPasswordWo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#smtp_password_wo MailmanagerIngressPoint#smtp_password_wo}.

---

##### `smtpPasswordWoVersion`<sup>Optional</sup> <a name="smtpPasswordWoVersion" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.smtpPasswordWoVersion"></a>

```java
public java.lang.Number getSmtpPasswordWoVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#smtp_password_wo_version MailmanagerIngressPoint#smtp_password_wo_version}.

---

##### `tlsAuthConfiguration`<sup>Optional</sup> <a name="tlsAuthConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration.property.tlsAuthConfiguration"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration> getTlsAuthConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>>

tls_auth_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#tls_auth_configuration MailmanagerIngressPoint#tls_auth_configuration}

---

### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration;

MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration.builder()
//  .trustStore(IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration.property.trustStore">trustStore</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>></code> | trust_store block. |

---

##### `trustStore`<sup>Optional</sup> <a name="trustStore" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration.property.trustStore"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore> getTrustStore();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>>

trust_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#trust_store MailmanagerIngressPoint#trust_store}

---

### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore;

MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.builder()
    .caContent(java.lang.String)
//  .crlContent(java.lang.String)
//  .kmsKeyArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.caContent">caContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#ca_content MailmanagerIngressPoint#ca_content}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.crlContent">crlContent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#crl_content MailmanagerIngressPoint#crl_content}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#kms_key_arn MailmanagerIngressPoint#kms_key_arn}. |

---

##### `caContent`<sup>Required</sup> <a name="caContent" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.caContent"></a>

```java
public java.lang.String getCaContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#ca_content MailmanagerIngressPoint#ca_content}.

---

##### `crlContent`<sup>Optional</sup> <a name="crlContent" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.crlContent"></a>

```java
public java.lang.String getCrlContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#crl_content MailmanagerIngressPoint#crl_content}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#kms_key_arn MailmanagerIngressPoint#kms_key_arn}.

---

### MailmanagerIngressPointNetworkConfiguration <a name="MailmanagerIngressPointNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointNetworkConfiguration;

MailmanagerIngressPointNetworkConfiguration.builder()
//  .privateNetworkConfiguration(IResolvable|java.util.List<MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration>)
//  .publicNetworkConfiguration(IResolvable|java.util.List<MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.property.privateNetworkConfiguration">privateNetworkConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>></code> | private_network_configuration block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.property.publicNetworkConfiguration">publicNetworkConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>></code> | public_network_configuration block. |

---

##### `privateNetworkConfiguration`<sup>Optional</sup> <a name="privateNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.property.privateNetworkConfiguration"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration> getPrivateNetworkConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>>

private_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#private_network_configuration MailmanagerIngressPoint#private_network_configuration}

---

##### `publicNetworkConfiguration`<sup>Optional</sup> <a name="publicNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration.property.publicNetworkConfiguration"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration> getPublicNetworkConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>>

public_network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#public_network_configuration MailmanagerIngressPoint#public_network_configuration}

---

### MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration <a name="MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration;

MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.builder()
    .vpcEndpointId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#vpc_endpoint_id MailmanagerIngressPoint#vpc_endpoint_id}. |

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#vpc_endpoint_id MailmanagerIngressPoint#vpc_endpoint_id}.

---

### MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration <a name="MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration;

MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration.builder()
    .ipType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration.property.ipType">ipType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#ip_type MailmanagerIngressPoint#ip_type}. |

---

##### `ipType`<sup>Required</sup> <a name="ipType" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration.property.ipType"></a>

```java
public java.lang.String getIpType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#ip_type MailmanagerIngressPoint#ip_type}.

---

### MailmanagerIngressPointTimeouts <a name="MailmanagerIngressPointTimeouts" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointTimeouts;

MailmanagerIngressPointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#create MailmanagerIngressPoint#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#delete MailmanagerIngressPoint#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/mailmanager_ingress_point#update MailmanagerIngressPoint#update}

---

## Classes <a name="Classes" id="Classes"></a>

### MailmanagerIngressPointIngressPointConfigurationList <a name="MailmanagerIngressPointIngressPointConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointIngressPointConfigurationList;

new MailmanagerIngressPointIngressPointConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.get"></a>

```java
public MailmanagerIngressPointIngressPointConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>>

---


### MailmanagerIngressPointIngressPointConfigurationOutputReference <a name="MailmanagerIngressPointIngressPointConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointIngressPointConfigurationOutputReference;

new MailmanagerIngressPointIngressPointConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration">putTlsAuthConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPasswordWo">resetSmtpPasswordWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPasswordWoVersion">resetSmtpPasswordWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetTlsAuthConfiguration">resetTlsAuthConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTlsAuthConfiguration` <a name="putTlsAuthConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration"></a>

```java
public void putTlsAuthConfiguration(IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.putTlsAuthConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>>

---

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```

##### `resetSmtpPasswordWo` <a name="resetSmtpPasswordWo" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPasswordWo"></a>

```java
public void resetSmtpPasswordWo()
```

##### `resetSmtpPasswordWoVersion` <a name="resetSmtpPasswordWoVersion" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetSmtpPasswordWoVersion"></a>

```java
public void resetSmtpPasswordWoVersion()
```

##### `resetTlsAuthConfiguration` <a name="resetTlsAuthConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.resetTlsAuthConfiguration"></a>

```java
public void resetTlsAuthConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration">tlsAuthConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoInput">smtpPasswordWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoVersionInput">smtpPasswordWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfigurationInput">tlsAuthConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWo">smtpPasswordWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoVersion">smtpPasswordWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tlsAuthConfiguration`<sup>Required</sup> <a name="tlsAuthConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfiguration"></a>

```java
public MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList getTlsAuthConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList</a>

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `smtpPasswordWoInput`<sup>Optional</sup> <a name="smtpPasswordWoInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoInput"></a>

```java
public java.lang.String getSmtpPasswordWoInput();
```

- *Type:* java.lang.String

---

##### `smtpPasswordWoVersionInput`<sup>Optional</sup> <a name="smtpPasswordWoVersionInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoVersionInput"></a>

```java
public java.lang.Number getSmtpPasswordWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `tlsAuthConfigurationInput`<sup>Optional</sup> <a name="tlsAuthConfigurationInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.tlsAuthConfigurationInput"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration> getTlsAuthConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>>

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### ~~`smtpPasswordWo`~~<sup>Required</sup> <a name="smtpPasswordWo" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```java
public java.lang.String getSmtpPasswordWo();
```

- *Type:* java.lang.String

---

##### `smtpPasswordWoVersion`<sup>Required</sup> <a name="smtpPasswordWoVersion" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.smtpPasswordWoVersion"></a>

```java
public java.lang.Number getSmtpPasswordWoVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerIngressPointIngressPointConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfiguration">MailmanagerIngressPointIngressPointConfiguration</a>

---


### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList;

new MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.get"></a>

```java
public MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>>

---


### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference;

new MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore">putTrustStore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resetTrustStore">resetTrustStore</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTrustStore` <a name="putTrustStore" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore"></a>

```java
public void putTrustStore(IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.putTrustStore.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>>

---

##### `resetTrustStore` <a name="resetTrustStore" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.resetTrustStore"></a>

```java
public void resetTrustStore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore">trustStore</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStoreInput">trustStoreInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStore"></a>

```java
public MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList getTrustStore();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList</a>

---

##### `trustStoreInput`<sup>Optional</sup> <a name="trustStoreInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.trustStoreInput"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore> getTrustStoreInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfiguration</a>

---


### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList;

new MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.get"></a>

```java
public MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>>

---


### MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference <a name="MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference;

new MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCrlContent">resetCrlContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrlContent` <a name="resetCrlContent" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetCrlContent"></a>

```java
public void resetCrlContent()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContentInput">caContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContentInput">crlContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent">caContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent">crlContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caContentInput`<sup>Optional</sup> <a name="caContentInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContentInput"></a>

```java
public java.lang.String getCaContentInput();
```

- *Type:* java.lang.String

---

##### `crlContentInput`<sup>Optional</sup> <a name="crlContentInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContentInput"></a>

```java
public java.lang.String getCrlContentInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `caContent`<sup>Required</sup> <a name="caContent" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.caContent"></a>

```java
public java.lang.String getCaContent();
```

- *Type:* java.lang.String

---

##### `crlContent`<sup>Required</sup> <a name="crlContent" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.crlContent"></a>

```java
public java.lang.String getCrlContent();
```

- *Type:* java.lang.String

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStoreOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore">MailmanagerIngressPointIngressPointConfigurationTlsAuthConfigurationTrustStore</a>

---


### MailmanagerIngressPointNetworkConfigurationList <a name="MailmanagerIngressPointNetworkConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointNetworkConfigurationList;

new MailmanagerIngressPointNetworkConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.get"></a>

```java
public MailmanagerIngressPointNetworkConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointNetworkConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>>

---


### MailmanagerIngressPointNetworkConfigurationOutputReference <a name="MailmanagerIngressPointNetworkConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointNetworkConfigurationOutputReference;

new MailmanagerIngressPointNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration">putPrivateNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration">putPublicNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resetPrivateNetworkConfiguration">resetPrivateNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resetPublicNetworkConfiguration">resetPublicNetworkConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateNetworkConfiguration` <a name="putPrivateNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration"></a>

```java
public void putPrivateNetworkConfiguration(IResolvable|java.util.List<MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPrivateNetworkConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>>

---

##### `putPublicNetworkConfiguration` <a name="putPublicNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration"></a>

```java
public void putPublicNetworkConfiguration(IResolvable|java.util.List<MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.putPublicNetworkConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>>

---

##### `resetPrivateNetworkConfiguration` <a name="resetPrivateNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resetPrivateNetworkConfiguration"></a>

```java
public void resetPrivateNetworkConfiguration()
```

##### `resetPublicNetworkConfiguration` <a name="resetPublicNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.resetPublicNetworkConfiguration"></a>

```java
public void resetPublicNetworkConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration">privateNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration">publicNetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfigurationInput">privateNetworkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfigurationInput">publicNetworkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateNetworkConfiguration`<sup>Required</sup> <a name="privateNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfiguration"></a>

```java
public MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList getPrivateNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList</a>

---

##### `publicNetworkConfiguration`<sup>Required</sup> <a name="publicNetworkConfiguration" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfiguration"></a>

```java
public MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList getPublicNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList</a>

---

##### `privateNetworkConfigurationInput`<sup>Optional</sup> <a name="privateNetworkConfigurationInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.privateNetworkConfigurationInput"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration> getPrivateNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>>

---

##### `publicNetworkConfigurationInput`<sup>Optional</sup> <a name="publicNetworkConfigurationInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.publicNetworkConfigurationInput"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration> getPublicNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerIngressPointNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfiguration">MailmanagerIngressPointNetworkConfiguration</a>

---


### MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList <a name="MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList;

new MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.get"></a>

```java
public MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>>

---


### MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference <a name="MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference;

new MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointIdInput"></a>

```java
public java.lang.String getVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPrivateNetworkConfiguration</a>

---


### MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList <a name="MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList;

new MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.get"></a>

```java
public MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>>

---


### MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference <a name="MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference;

new MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipTypeInput">ipTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType">ipType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipTypeInput`<sup>Optional</sup> <a name="ipTypeInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipTypeInput"></a>

```java
public java.lang.String getIpTypeInput();
```

- *Type:* java.lang.String

---

##### `ipType`<sup>Required</sup> <a name="ipType" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.ipType"></a>

```java
public java.lang.String getIpType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration">MailmanagerIngressPointNetworkConfigurationPublicNetworkConfiguration</a>

---


### MailmanagerIngressPointTimeoutsOutputReference <a name="MailmanagerIngressPointTimeoutsOutputReference" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.mailmanager_ingress_point.MailmanagerIngressPointTimeoutsOutputReference;

new MailmanagerIngressPointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|MailmanagerIngressPointTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.mailmanagerIngressPoint.MailmanagerIngressPointTimeouts">MailmanagerIngressPointTimeouts</a>

---



