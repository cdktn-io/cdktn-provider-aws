# `redshiftNamespaceRegistration` Submodule <a name="`redshiftNamespaceRegistration` Submodule" id="@cdktn/provider-aws.redshiftNamespaceRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftNamespaceRegistration <a name="RedshiftNamespaceRegistration" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration aws_redshift_namespace_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_namespace_registration.RedshiftNamespaceRegistration;

RedshiftNamespaceRegistration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .consumerIdentifier(java.lang.String)
    .namespaceType(java.lang.String)
//  .provisionedClusterIdentifier(java.lang.String)
//  .region(java.lang.String)
//  .serverlessNamespaceIdentifier(java.lang.String)
//  .serverlessWorkgroupIdentifier(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.consumerIdentifier">consumerIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.namespaceType">namespaceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.provisionedClusterIdentifier">provisionedClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.serverlessNamespaceIdentifier">serverlessNamespaceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.serverlessWorkgroupIdentifier">serverlessWorkgroupIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `consumerIdentifier`<sup>Required</sup> <a name="consumerIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.consumerIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}.

---

##### `namespaceType`<sup>Required</sup> <a name="namespaceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.namespaceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}.

---

##### `provisionedClusterIdentifier`<sup>Optional</sup> <a name="provisionedClusterIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.provisionedClusterIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#region RedshiftNamespaceRegistration#region}

---

##### `serverlessNamespaceIdentifier`<sup>Optional</sup> <a name="serverlessNamespaceIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.serverlessNamespaceIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}.

---

##### `serverlessWorkgroupIdentifier`<sup>Optional</sup> <a name="serverlessWorkgroupIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.Initializer.parameter.serverlessWorkgroupIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetProvisionedClusterIdentifier">resetProvisionedClusterIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessNamespaceIdentifier">resetServerlessNamespaceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessWorkgroupIdentifier">resetServerlessWorkgroupIdentifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetProvisionedClusterIdentifier` <a name="resetProvisionedClusterIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetProvisionedClusterIdentifier"></a>

```java
public void resetProvisionedClusterIdentifier()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetServerlessNamespaceIdentifier` <a name="resetServerlessNamespaceIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessNamespaceIdentifier"></a>

```java
public void resetServerlessNamespaceIdentifier()
```

##### `resetServerlessWorkgroupIdentifier` <a name="resetServerlessWorkgroupIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.resetServerlessWorkgroupIdentifier"></a>

```java
public void resetServerlessWorkgroupIdentifier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RedshiftNamespaceRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct"></a>

```java
import io.cdktn.providers.aws.redshift_namespace_registration.RedshiftNamespaceRegistration;

RedshiftNamespaceRegistration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.redshift_namespace_registration.RedshiftNamespaceRegistration;

RedshiftNamespaceRegistration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.redshift_namespace_registration.RedshiftNamespaceRegistration;

RedshiftNamespaceRegistration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.redshift_namespace_registration.RedshiftNamespaceRegistration;

RedshiftNamespaceRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RedshiftNamespaceRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RedshiftNamespaceRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RedshiftNamespaceRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RedshiftNamespaceRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RedshiftNamespaceRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifierInput">consumerIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceTypeInput">namespaceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifierInput">provisionedClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifierInput">serverlessNamespaceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifierInput">serverlessWorkgroupIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifier">consumerIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceType">namespaceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifier">provisionedClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifier">serverlessNamespaceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifier">serverlessWorkgroupIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `consumerIdentifierInput`<sup>Optional</sup> <a name="consumerIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifierInput"></a>

```java
public java.lang.String getConsumerIdentifierInput();
```

- *Type:* java.lang.String

---

##### `namespaceTypeInput`<sup>Optional</sup> <a name="namespaceTypeInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceTypeInput"></a>

```java
public java.lang.String getNamespaceTypeInput();
```

- *Type:* java.lang.String

---

##### `provisionedClusterIdentifierInput`<sup>Optional</sup> <a name="provisionedClusterIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifierInput"></a>

```java
public java.lang.String getProvisionedClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `serverlessNamespaceIdentifierInput`<sup>Optional</sup> <a name="serverlessNamespaceIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifierInput"></a>

```java
public java.lang.String getServerlessNamespaceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `serverlessWorkgroupIdentifierInput`<sup>Optional</sup> <a name="serverlessWorkgroupIdentifierInput" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifierInput"></a>

```java
public java.lang.String getServerlessWorkgroupIdentifierInput();
```

- *Type:* java.lang.String

---

##### `consumerIdentifier`<sup>Required</sup> <a name="consumerIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.consumerIdentifier"></a>

```java
public java.lang.String getConsumerIdentifier();
```

- *Type:* java.lang.String

---

##### `namespaceType`<sup>Required</sup> <a name="namespaceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.namespaceType"></a>

```java
public java.lang.String getNamespaceType();
```

- *Type:* java.lang.String

---

##### `provisionedClusterIdentifier`<sup>Required</sup> <a name="provisionedClusterIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.provisionedClusterIdentifier"></a>

```java
public java.lang.String getProvisionedClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `serverlessNamespaceIdentifier`<sup>Required</sup> <a name="serverlessNamespaceIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessNamespaceIdentifier"></a>

```java
public java.lang.String getServerlessNamespaceIdentifier();
```

- *Type:* java.lang.String

---

##### `serverlessWorkgroupIdentifier`<sup>Required</sup> <a name="serverlessWorkgroupIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.serverlessWorkgroupIdentifier"></a>

```java
public java.lang.String getServerlessWorkgroupIdentifier();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftNamespaceRegistrationConfig <a name="RedshiftNamespaceRegistrationConfig" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.redshift_namespace_registration.RedshiftNamespaceRegistrationConfig;

RedshiftNamespaceRegistrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .consumerIdentifier(java.lang.String)
    .namespaceType(java.lang.String)
//  .provisionedClusterIdentifier(java.lang.String)
//  .region(java.lang.String)
//  .serverlessNamespaceIdentifier(java.lang.String)
//  .serverlessWorkgroupIdentifier(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.consumerIdentifier">consumerIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.namespaceType">namespaceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisionedClusterIdentifier">provisionedClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessNamespaceIdentifier">serverlessNamespaceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}. |
| <code><a href="#@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessWorkgroupIdentifier">serverlessWorkgroupIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `consumerIdentifier`<sup>Required</sup> <a name="consumerIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.consumerIdentifier"></a>

```java
public java.lang.String getConsumerIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#consumer_identifier RedshiftNamespaceRegistration#consumer_identifier}.

---

##### `namespaceType`<sup>Required</sup> <a name="namespaceType" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.namespaceType"></a>

```java
public java.lang.String getNamespaceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#namespace_type RedshiftNamespaceRegistration#namespace_type}.

---

##### `provisionedClusterIdentifier`<sup>Optional</sup> <a name="provisionedClusterIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.provisionedClusterIdentifier"></a>

```java
public java.lang.String getProvisionedClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#provisioned_cluster_identifier RedshiftNamespaceRegistration#provisioned_cluster_identifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#region RedshiftNamespaceRegistration#region}

---

##### `serverlessNamespaceIdentifier`<sup>Optional</sup> <a name="serverlessNamespaceIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessNamespaceIdentifier"></a>

```java
public java.lang.String getServerlessNamespaceIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#serverless_namespace_identifier RedshiftNamespaceRegistration#serverless_namespace_identifier}.

---

##### `serverlessWorkgroupIdentifier`<sup>Optional</sup> <a name="serverlessWorkgroupIdentifier" id="@cdktn/provider-aws.redshiftNamespaceRegistration.RedshiftNamespaceRegistrationConfig.property.serverlessWorkgroupIdentifier"></a>

```java
public java.lang.String getServerlessWorkgroupIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/redshift_namespace_registration#serverless_workgroup_identifier RedshiftNamespaceRegistration#serverless_workgroup_identifier}.

---



