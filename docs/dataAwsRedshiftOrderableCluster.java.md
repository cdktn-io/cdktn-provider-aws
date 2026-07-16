# `dataAwsRedshiftOrderableCluster` Submodule <a name="`dataAwsRedshiftOrderableCluster` Submodule" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRedshiftOrderableCluster <a name="DataAwsRedshiftOrderableCluster" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster aws_redshift_orderable_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_redshift_orderable_cluster.DataAwsRedshiftOrderableCluster;

DataAwsRedshiftOrderableCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .clusterType(java.lang.String)
//  .clusterVersion(java.lang.String)
//  .id(java.lang.String)
//  .nodeType(java.lang.String)
//  .preferredNodeTypes(java.util.List<java.lang.String>)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.clusterType">clusterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#id DataAwsRedshiftOrderableCluster#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#node_type DataAwsRedshiftOrderableCluster#node_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.preferredNodeTypes">preferredNodeTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.clusterType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}.

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.clusterVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#id DataAwsRedshiftOrderableCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.nodeType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#node_type DataAwsRedshiftOrderableCluster#node_type}.

---

##### `preferredNodeTypes`<sup>Optional</sup> <a name="preferredNodeTypes" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.preferredNodeTypes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#region DataAwsRedshiftOrderableCluster#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterType">resetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterVersion">resetClusterVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetPreferredNodeTypes">resetPreferredNodeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetClusterType` <a name="resetClusterType" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterType"></a>

```java
public void resetClusterType()
```

##### `resetClusterVersion` <a name="resetClusterVersion" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetClusterVersion"></a>

```java
public void resetClusterVersion()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetId"></a>

```java
public void resetId()
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetNodeType"></a>

```java
public void resetNodeType()
```

##### `resetPreferredNodeTypes` <a name="resetPreferredNodeTypes" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetPreferredNodeTypes"></a>

```java
public void resetPreferredNodeTypes()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsRedshiftOrderableCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isConstruct"></a>

```java
import io.cdktn.providers.aws.data_aws_redshift_orderable_cluster.DataAwsRedshiftOrderableCluster;

DataAwsRedshiftOrderableCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.data_aws_redshift_orderable_cluster.DataAwsRedshiftOrderableCluster;

DataAwsRedshiftOrderableCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformDataSource"></a>

```java
import io.cdktn.providers.aws.data_aws_redshift_orderable_cluster.DataAwsRedshiftOrderableCluster;

DataAwsRedshiftOrderableCluster.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.data_aws_redshift_orderable_cluster.DataAwsRedshiftOrderableCluster;

DataAwsRedshiftOrderableCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsRedshiftOrderableCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsRedshiftOrderableCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsRedshiftOrderableCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsRedshiftOrderableCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsRedshiftOrderableCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterTypeInput">clusterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersionInput">clusterVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeTypeInput">nodeTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypesInput">preferredNodeTypesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypes">preferredNodeTypes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterTypeInput"></a>

```java
public java.lang.String getClusterTypeInput();
```

- *Type:* java.lang.String

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersionInput"></a>

```java
public java.lang.String getClusterVersionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeTypeInput"></a>

```java
public java.lang.String getNodeTypeInput();
```

- *Type:* java.lang.String

---

##### `preferredNodeTypesInput`<sup>Optional</sup> <a name="preferredNodeTypesInput" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypesInput"></a>

```java
public java.util.List<java.lang.String> getPreferredNodeTypesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `preferredNodeTypes`<sup>Required</sup> <a name="preferredNodeTypes" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.preferredNodeTypes"></a>

```java
public java.util.List<java.lang.String> getPreferredNodeTypes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRedshiftOrderableClusterConfig <a name="DataAwsRedshiftOrderableClusterConfig" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.data_aws_redshift_orderable_cluster.DataAwsRedshiftOrderableClusterConfig;

DataAwsRedshiftOrderableClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .clusterType(java.lang.String)
//  .clusterVersion(java.lang.String)
//  .id(java.lang.String)
//  .nodeType(java.lang.String)
//  .preferredNodeTypes(java.util.List<java.lang.String>)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterType">clusterType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterVersion">clusterVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#id DataAwsRedshiftOrderableCluster#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#node_type DataAwsRedshiftOrderableCluster#node_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.preferredNodeTypes">preferredNodeTypes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}. |
| <code><a href="#@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterType"></a>

```java
public java.lang.String getClusterType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#cluster_type DataAwsRedshiftOrderableCluster#cluster_type}.

---

##### `clusterVersion`<sup>Optional</sup> <a name="clusterVersion" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.clusterVersion"></a>

```java
public java.lang.String getClusterVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#cluster_version DataAwsRedshiftOrderableCluster#cluster_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#id DataAwsRedshiftOrderableCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#node_type DataAwsRedshiftOrderableCluster#node_type}.

---

##### `preferredNodeTypes`<sup>Optional</sup> <a name="preferredNodeTypes" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.preferredNodeTypes"></a>

```java
public java.util.List<java.lang.String> getPreferredNodeTypes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#preferred_node_types DataAwsRedshiftOrderableCluster#preferred_node_types}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsRedshiftOrderableCluster.DataAwsRedshiftOrderableClusterConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/redshift_orderable_cluster#region DataAwsRedshiftOrderableCluster#region}

---



