# `grafanaWorkspaceServiceAccountToken` Submodule <a name="`grafanaWorkspaceServiceAccountToken` Submodule" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrafanaWorkspaceServiceAccountToken <a name="GrafanaWorkspaceServiceAccountToken" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token aws_grafana_workspace_service_account_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer"></a>

```java
import io.cdktn.providers.aws.grafana_workspace_service_account_token.GrafanaWorkspaceServiceAccountToken;

GrafanaWorkspaceServiceAccountToken.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .secondsToLive(java.lang.Number)
    .serviceAccountId(java.lang.String)
    .workspaceId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.secondsToLive">secondsToLive</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}.

---

##### `secondsToLive`<sup>Required</sup> <a name="secondsToLive" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.secondsToLive"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}.

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.serviceAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.workspaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#region GrafanaWorkspaceServiceAccountToken#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GrafanaWorkspaceServiceAccountToken resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isConstruct"></a>

```java
import io.cdktn.providers.aws.grafana_workspace_service_account_token.GrafanaWorkspaceServiceAccountToken;

GrafanaWorkspaceServiceAccountToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.grafana_workspace_service_account_token.GrafanaWorkspaceServiceAccountToken;

GrafanaWorkspaceServiceAccountToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.grafana_workspace_service_account_token.GrafanaWorkspaceServiceAccountToken;

GrafanaWorkspaceServiceAccountToken.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.grafana_workspace_service_account_token.GrafanaWorkspaceServiceAccountToken;

GrafanaWorkspaceServiceAccountToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GrafanaWorkspaceServiceAccountToken.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GrafanaWorkspaceServiceAccountToken resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GrafanaWorkspaceServiceAccountToken to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GrafanaWorkspaceServiceAccountToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GrafanaWorkspaceServiceAccountToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountTokenId">serviceAccountTokenId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLiveInput">secondsToLiveInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountIdInput">serviceAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceIdInput">workspaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLive">secondsToLive</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `serviceAccountTokenId`<sup>Required</sup> <a name="serviceAccountTokenId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountTokenId"></a>

```java
public java.lang.String getServiceAccountTokenId();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secondsToLiveInput`<sup>Optional</sup> <a name="secondsToLiveInput" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLiveInput"></a>

```java
public java.lang.Number getSecondsToLiveInput();
```

- *Type:* java.lang.Number

---

##### `serviceAccountIdInput`<sup>Optional</sup> <a name="serviceAccountIdInput" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountIdInput"></a>

```java
public java.lang.String getServiceAccountIdInput();
```

- *Type:* java.lang.String

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceIdInput"></a>

```java
public java.lang.String getWorkspaceIdInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secondsToLive`<sup>Required</sup> <a name="secondsToLive" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.secondsToLive"></a>

```java
public java.lang.Number getSecondsToLive();
```

- *Type:* java.lang.Number

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GrafanaWorkspaceServiceAccountTokenConfig <a name="GrafanaWorkspaceServiceAccountTokenConfig" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.grafana_workspace_service_account_token.GrafanaWorkspaceServiceAccountTokenConfig;

GrafanaWorkspaceServiceAccountTokenConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .secondsToLive(java.lang.Number)
    .serviceAccountId(java.lang.String)
    .workspaceId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.secondsToLive">secondsToLive</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.workspaceId">workspaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}. |
| <code><a href="#@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#name GrafanaWorkspaceServiceAccountToken#name}.

---

##### `secondsToLive`<sup>Required</sup> <a name="secondsToLive" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.secondsToLive"></a>

```java
public java.lang.Number getSecondsToLive();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#seconds_to_live GrafanaWorkspaceServiceAccountToken#seconds_to_live}.

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#service_account_id GrafanaWorkspaceServiceAccountToken#service_account_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.workspaceId"></a>

```java
public java.lang.String getWorkspaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#workspace_id GrafanaWorkspaceServiceAccountToken#workspace_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.grafanaWorkspaceServiceAccountToken.GrafanaWorkspaceServiceAccountTokenConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/grafana_workspace_service_account_token#region GrafanaWorkspaceServiceAccountToken#region}

---



