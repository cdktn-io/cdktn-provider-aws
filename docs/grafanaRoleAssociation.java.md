# `grafanaRoleAssociation` Submodule <a name="`grafanaRoleAssociation` Submodule" id="@cdktn/provider-aws.grafanaRoleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaRoleAssociation <a name="GrafanaRoleAssociation" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association aws_grafana_role_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer"></a>

```java
import io.cdktn.providers.aws.grafana_role_association.GrafanaRoleAssociation;

GrafanaRoleAssociation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .role(java.lang.String)
    .workspaceId(java.lang.String)
//  .groupIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GrafanaRoleAssociationTimeouts)
//  .userIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#role GrafanaRoleAssociation#role}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#workspace_id GrafanaRoleAssociation#workspace_id}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.groupIds">groupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#group_ids GrafanaRoleAssociation#group_ids}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#id GrafanaRoleAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.userIds">userIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#user_ids GrafanaRoleAssociation#user_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#role GrafanaRoleAssociation#role}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#workspace_id GrafanaRoleAssociation#workspace_id}.

---

##### `groupIds`<sup>Optional</sup> <a name="groupIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.groupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#group_ids GrafanaRoleAssociation#group_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#id GrafanaRoleAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#region GrafanaRoleAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#timeouts GrafanaRoleAssociation#timeouts}

---

##### `userIds`<sup>Optional</sup> <a name="userIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.Initializer.parameter.userIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#user_ids GrafanaRoleAssociation#user_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetGroupIds">resetGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetUserIds">resetUserIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.putTimeouts"></a>

```java
public void putTimeouts(GrafanaRoleAssociationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a>

---

##### `resetGroupIds` <a name="resetGroupIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetGroupIds"></a>

```java
public void resetGroupIds()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserIds` <a name="resetUserIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.resetUserIds"></a>

```java
public void resetUserIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GrafanaRoleAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isConstruct"></a>

```java
import io.cdktn.providers.aws.grafana_role_association.GrafanaRoleAssociation;

GrafanaRoleAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.grafana_role_association.GrafanaRoleAssociation;

GrafanaRoleAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.grafana_role_association.GrafanaRoleAssociation;

GrafanaRoleAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.grafana_role_association.GrafanaRoleAssociation;

GrafanaRoleAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GrafanaRoleAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GrafanaRoleAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GrafanaRoleAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GrafanaRoleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GrafanaRoleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference">GrafanaRoleAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.groupIdsInput">groupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.userIdsInput">userIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.groupIds">groupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.userIds">userIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.timeouts"></a>

```java
public GrafanaRoleAssociationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference">GrafanaRoleAssociationTimeoutsOutputReference</a>

---

##### `groupIdsInput`<sup>Optional</sup> <a name="groupIdsInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.groupIdsInput"></a>

```java
public java.util.List<java.lang.String> getGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.timeoutsInput"></a>

```java
public IResolvable|GrafanaRoleAssociationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a>

---

##### `userIdsInput`<sup>Optional</sup> <a name="userIdsInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.userIdsInput"></a>

```java
public java.util.List<java.lang.String> getUserIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `groupIds`<sup>Required</sup> <a name="groupIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.groupIds"></a>

```java
public java.util.List<java.lang.String> getGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `userIds`<sup>Required</sup> <a name="userIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.userIds"></a>

```java
public java.util.List<java.lang.String> getUserIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaRoleAssociationConfig <a name="GrafanaRoleAssociationConfig" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.grafana_role_association.GrafanaRoleAssociationConfig;

GrafanaRoleAssociationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .role(java.lang.String)
    .workspaceId(java.lang.String)
//  .groupIds(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GrafanaRoleAssociationTimeouts)
//  .userIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#role GrafanaRoleAssociation#role}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#workspace_id GrafanaRoleAssociation#workspace_id}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.groupIds">groupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#group_ids GrafanaRoleAssociation#group_ids}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#id GrafanaRoleAssociation#id}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.userIds">userIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#user_ids GrafanaRoleAssociation#user_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#role GrafanaRoleAssociation#role}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#workspace_id GrafanaRoleAssociation#workspace_id}.

---

##### `groupIds`<sup>Optional</sup> <a name="groupIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.groupIds"></a>

```java
public java.util.List<java.lang.String> getGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#group_ids GrafanaRoleAssociation#group_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#id GrafanaRoleAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#region GrafanaRoleAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.timeouts"></a>

```java
public GrafanaRoleAssociationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#timeouts GrafanaRoleAssociation#timeouts}

---

##### `userIds`<sup>Optional</sup> <a name="userIds" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationConfig.property.userIds"></a>

```java
public java.util.List<java.lang.String> getUserIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#user_ids GrafanaRoleAssociation#user_ids}.

---

### GrafanaRoleAssociationTimeouts <a name="GrafanaRoleAssociationTimeouts" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.grafana_role_association.GrafanaRoleAssociationTimeouts;

GrafanaRoleAssociationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#create GrafanaRoleAssociation#create}. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#delete GrafanaRoleAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#create GrafanaRoleAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/grafana_role_association#delete GrafanaRoleAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrafanaRoleAssociationTimeoutsOutputReference <a name="GrafanaRoleAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.grafana_role_association.GrafanaRoleAssociationTimeoutsOutputReference;

new GrafanaRoleAssociationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GrafanaRoleAssociationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.grafanaRoleAssociation.GrafanaRoleAssociationTimeouts">GrafanaRoleAssociationTimeouts</a>

---



